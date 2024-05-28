import { ipcRenderer } from "electron";
import { useEffect, useState } from "react";

const initialUserKeys = {
  openMenu: "",
  isHold: "",
  up: "",
  down: "",
  left: "",
  right: "",
};

export function useUserKeys() {
  const [userKeys, setUserKeys] = useState(initialUserKeys);

  useEffect(() => {
    ipcRenderer.invoke("get-keys").then((userKeys) => {
      setUserKeys(userKeys);
    });
  }, []);

  const setUserKey = (key: string, value: string | boolean) => {
    const newKeys = { ...userKeys, [key]: value };
    setUserKeys(newKeys);
    ipcRenderer.invoke("set-keys", newKeys);
  };

  return { userKeys, setUserKey };
}
