import { ipcRenderer } from "electron";
import { useEffect, useState } from "react";

export function useGetConnectionInfo() {
  const [ip, setIp] = useState("");

  const getConnectionInfo = async () => {
    const ip = await ipcRenderer.invoke("get-ip");
    const port = await ipcRenderer.invoke("get-port");

    setIp(`${ip}:${port}`);
  };

  useEffect(() => {
    getConnectionInfo();
  }, []);

  return ip;
}
