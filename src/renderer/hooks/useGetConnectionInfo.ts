import { ipcRenderer } from "electron";
import { useEffect, useState } from "react";

export function useGetConnectionInfo() {
  const [ip, setIp] = useState("");

  const getConnectionInfo = async () => {
    const ip = await ipcRenderer.invoke("get-ip");

    setIp(`${ip}`);
  };

  useEffect(() => {
    getConnectionInfo();
  }, []);

  return ip;
}
