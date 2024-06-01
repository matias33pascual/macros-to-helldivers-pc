/* eslint-disable @typescript-eslint/no-explicit-any */
import os from "os";
import getPort, { portNumbers } from "get-port";

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

  public static async findAvailablePort(
    startPort: number,
    endPort: number
  ): Promise<number | null> {
    const port = await getPort({ port: portNumbers(startPort, endPort) });

    return port;
  }

  public static consoleLogWithColor(message: string, colorCode: number) {
    console.log(`\x1b[${colorCode}m%s\x1b[0m`, message);
  }
}
