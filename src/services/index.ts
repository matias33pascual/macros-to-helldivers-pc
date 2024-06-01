import { ipcMain } from "electron";
import UserPreferences, {
  UserKeys,
} from "./keyboard-simulator/user-preferences";
import ConnectionManager from "./connection/manager/connection-manager";

ipcMain.handle("get-ip", () => {
  return ConnectionManager.getIpAddress();
});

ipcMain.handle("get-port", () => {
  return ConnectionManager.getPort();
});

ipcMain.handle("get-keys", () => {
  return UserPreferences.getUserAssignedKeys();
});

ipcMain.handle("set-keys", (_, keys: UserKeys) => {
  return UserPreferences.setUserAssignedKeys(keys);
});
