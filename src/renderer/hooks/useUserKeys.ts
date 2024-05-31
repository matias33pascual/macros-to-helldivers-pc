import { ipcRenderer } from "electron";
import { useEffect, useState } from "react";
import { UserKeys } from "../../services/keyboard-simulator/user-preferences";

const initialUserKeys: UserKeys = {
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
    let newKeys: UserKeys = { ...userKeys };

    // If key is already used, remove it
    Object.keys(newKeys).forEach((k: keyof UserKeys) => {
      if (newKeys[k] === value) {
        newKeys = { ...newKeys, [k]: "" };
      }
    });

    newKeys = { ...newKeys, [key]: value };

    setUserKeys(newKeys);
    ipcRenderer.invoke("set-keys", newKeys);
  };

  return { userKeys, setUserKey };
}
