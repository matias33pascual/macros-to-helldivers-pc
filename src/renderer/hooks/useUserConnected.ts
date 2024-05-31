import { useState, useEffect } from "react";
const { ipcRenderer } = window.require("electron");

export function useUserConnected() {
  const [userConnected, setUserConnected] = useState(false);

  useEffect(() => {
    const handleUserConnected = () => {
      setUserConnected(true);
      console.log("usuario conectado");
    };

    ipcRenderer.on("client-connected", handleUserConnected);

    return () => {
      ipcRenderer.removeListener("client-connected", handleUserConnected);
    };
  }, []);

  return userConnected;
}
