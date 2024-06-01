import { useState, useEffect } from "react";
const { ipcRenderer } = window.require("electron");

export function useUserConnected() {
  const [userConnected, setUserConnected] = useState(false);

  useEffect(() => {
    const handleUserConnected = (value: boolean) => {
      setUserConnected(value);

      if (value) console.log("usuario conectado");
      else console.log("Usuario desconectado");
    };

    const handleUserConnectedEvent = () => handleUserConnected(true);
    const handleUserDisconnectedEvent = () => handleUserConnected(false);

    ipcRenderer.on("client-connected", handleUserConnectedEvent);
    ipcRenderer.on("client-disconnected", handleUserDisconnectedEvent);

    return () => {
      ipcRenderer.removeListener("client-connected", handleUserConnectedEvent);
      ipcRenderer.removeListener(
        "client-disconnected",
        handleUserDisconnectedEvent
      );
    };
  }, []);

  return userConnected;
}
