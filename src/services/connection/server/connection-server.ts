/* eslint-disable @typescript-eslint/no-explicit-any */
import webSocket from "ws";

export class ConnectionServer {
  public static async startServer(host: string, port: number): Promise<any> {
    const webSocketServer = new webSocket.Server({
      host: host,
      port: port,
    });

    return webSocketServer;
  }

  public static sendMessage(ws: any, message: any) {
    ws.send(message);
  }

  public static closeServer(webSocketServer: any) {
    if (webSocketServer.clients) {
      webSocketServer.clients.forEach((client: any) => {
        client.terminate();
      });
    }

    webSocketServer.close();
  }
}
