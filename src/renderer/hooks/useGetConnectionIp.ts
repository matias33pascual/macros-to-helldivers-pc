import { ipcRenderer } from "electron";
import { useEffect, useState } from "react";

export function useGetConnectionIp() {
  const [ip, setIp] = useState("");

  const getConnectionIp = async () => {
    const ip = await ipcRenderer.invoke("get-ip");
    setIp(`${ip}`);
  };

  useEffect(() => {
    getConnectionIp();
  }, []);

  return ip;
}
