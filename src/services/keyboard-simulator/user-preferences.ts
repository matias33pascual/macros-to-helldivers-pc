/* eslint-disable no-empty */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable lines-between-class-members */

export interface UserKeys {
  open: string;
  up: string;
  down: string;
  left: string;
  right: string;
}

type UserKey = keyof UserKeys;

export default class UserPreferences {
  static open = "control";
  static up = "up";
  static down = "down";
  static left = "left";
  static right = "right";

  public static getUserAssignedKeys(): UserKeys {
    return {
      open: this.open,
      up: this.up,
      down: this.down,
      left: this.left,
      right: this.right,
    };
  }

  public static getUserAssignedKey(keyCode: UserKey): string | boolean {
    return this[keyCode];
  }

  public static setUserAssignedKeys(userKeys: UserKeys) {
    this.open = userKeys.open;
    this.up = userKeys.up;
    this.down = userKeys.down;
    this.left = userKeys.left;
    this.right = userKeys.right;
  }
}
