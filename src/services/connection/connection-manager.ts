import net from "net";
import WebSocket from "ws";
import StratagemsManager from "../stratagems/stratagems-manager";
import os from "os";
import MessageModel, {
  MessageCodes,
  PrepareStratagemsMessage,
  UseStratagemMessage,
} from "./message-model";

export default class ConnectionManager {
  private stratagemsManager: StratagemsManager;
  private ipAddress: string | null = null;
  private port: number | null = 433;

  constructor() {
    this.stratagemsManager = new StratagemsManager();
  }

  public handleMessage(message: MessageModel) {
    switch (message.code) {
      case MessageCodes.testingStratagem: {
        const body: UseStratagemMessage = message.body as UseStratagemMessage;

        this.stratagemsManager.handleStratagemTestById(body.id);

        break;
      }

      case MessageCodes.prepareStratagems: {
        const body: PrepareStratagemsMessage =
          message.body as PrepareStratagemsMessage;

        this.stratagemsManager.prepareSelectedStratagemsListByIds(body.ids);

        break;
      }

      case MessageCodes.useStratagem: {
        const body: UseStratagemMessage = message.body as UseStratagemMessage;

        this.stratagemsManager.handleStratagemById(body.id);

        break;
      }

      case MessageCodes.missionFinished: {
        break;
      }

      default:
        break;
    }
  }

  public getIpAddress() {
    if (this.ipAddress == null) {
      this.ipAddress = this.findIpAddress();
    }

    return this.ipAddress;
  }

  public async getPort() {
    if (this.port == null) {
      this.port = await this.findAvailablePort(43133, 65535);
    }

    return this.port;
  }

  private async findAvailablePort(
    startPort: number,
    endPort: number
  ): Promise<number | null> {
    for (let port = startPort; port <= endPort; port++) {
      const isPortTaken = await this.isPortTaken(port);
      if (!isPortTaken) {
        return port;
      }
    }
    return null;
  }

  private isPortTaken(port: number): Promise<boolean> {
    return new Promise((resolve) => {
      const tester = net
        .createServer()
        .once("error", () => resolve(true))
        .once("listening", () => {
          tester.once("close", () => resolve(false)).close();
        })
        .listen(port);
    });
  }

  async startServer() {
    const host = this.getIpAddress();
    const port = await this.getPort();

    const wss = new WebSocket.Server({
      host: host!,
      port: port!,
    });

    console.log(`Servidor creado en IP: ${host} - port: ${port}`);

    wss.on("connection", (ws: any) => {
      console.log("Cliente conectado");

      ws.on("message", (message: any) => {
        const parsedMessage: MessageModel = JSON.parse(message);
        this.handleMessage(parsedMessage);
      });

      ws.send("¡Hola, cliente!");
    });
  }

  private findIpAddress() {
    const interfaces = os.networkInterfaces();
    let ipAddress: string | null = null;

    let foundIpAddress = false;

    Object.keys(interfaces).forEach((interfaceName) => {
      interfaces[interfaceName].forEach((iface: any) => {
        if (!iface.internal && iface.family === "IPv4") {
          if (interfaceName.startsWith("Ethernet")) {
            ipAddress = iface.address;
            foundIpAddress = true;
          } else if (!foundIpAddress) {
            ipAddress = iface.address;
          }
        }
      });
    });

    return ipAddress;
  }
}
