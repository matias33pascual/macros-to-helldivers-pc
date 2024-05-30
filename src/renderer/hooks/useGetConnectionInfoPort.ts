import { ipcRenderer } from "electron";
import { useEffect, useState } from "react";

export function useGetConnectionInfoPort() {
  const [port, setPort] = useState("");

  const getConnectionInfoPort = async () => {
    const port = await ipcRenderer.invoke("get-port");

    setPort(`${port}`);
  };

  useEffect(() => {
    getConnectionInfoPort();
  }, []);

  return port;
}
