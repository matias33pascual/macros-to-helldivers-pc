import { ipcMain } from "electron";
import ConnectionManager from "./connection/connection-manager";
import UserPreferences, {
  UserKeys,
} from "./keyboard-simulator/user-preferences";

const connectionManager = new ConnectionManager();

ipcMain.handle("get-ip", () => {
  return connectionManager.getIpAddress();
});

ipcMain.handle("get-port", () => {
  return connectionManager.getPort();
});

ipcMain.handle("get-keys", () => {
  return UserPreferences.getUserAssignedKeys();
});

ipcMain.handle("set-keys", (_, keys: UserKeys) => {
  return UserPreferences.setUserAssignedKeys(keys);
});
