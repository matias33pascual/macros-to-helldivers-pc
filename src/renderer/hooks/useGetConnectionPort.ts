import { ipcRenderer } from "electron";
import { useEffect, useState } from "react";

export function useGetConnectionPort() {
  const [port, setPort] = useState("");

  const getConnectionPort = async () => {
    const port = await ipcRenderer.invoke("get-port");
    setPort(`${port}`);
  };

  useEffect(() => {
    getConnectionPort();
  }, []);

  return port;
}
