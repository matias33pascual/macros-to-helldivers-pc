/* eslint-disable @typescript-eslint/no-explicit-any */
import os from "os";
import net from "net";

export class ConnectionUtils {
  public static findIpAddress(): string | null {
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

  private static _isPortTaken(port: number): Promise<boolean> {
    return new Promise((resolve) => {
      const tester = net.createServer();

      tester.once("error", () => resolve(true));

      tester.once("listening", () => {
        tester.close();
        resolve(false);
      });

      tester.listen(port);
    });
  }

  public static async findAvailablePort(
    startPort: number,
    endPort: number
  ): Promise<number | null> {
    for (let port = startPort; port <= endPort; port++) {
      const isPortTaken = await this._isPortTaken(port);
      if (!isPortTaken) {
        return port;
      }
    }
    return null;
  }

  public static consoleLogWithColor(message: string, colorCode: number) {
    console.log(`\x1b[${colorCode}m%s\x1b[0m`, message);
  }
}
