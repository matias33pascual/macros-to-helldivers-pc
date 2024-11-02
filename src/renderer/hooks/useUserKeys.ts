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
    const storedValue = localStorage.getItem("user-keys");

    if (!storedValue) {
      ipcRenderer.invoke("get-keys").then((userKeys) => {
        setUserKeys(userKeys);
      });
    } else {
      const jsonData = JSON.parse(storedValue);
      setUserKeys(jsonData);
    }
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

    const jsonData = JSON.stringify(newKeys);

    localStorage.setItem("user-keys", jsonData);
  };

  return { userKeys, setUserKey };
}
