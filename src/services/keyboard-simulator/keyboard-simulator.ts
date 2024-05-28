/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */

import StratagemsModel from "../stratagems/stratagems-model";
import UserPreferences from "./user-preferences";
import robot from "@jitsi/robotjs";

export default class KeyboardSimulator {
  public setKeyboardDelay(delay: number): void {
    robot.setKeyboardDelay(delay);
  }

  public processStratagem(stratagem: StratagemsModel) {
    this.openStratagemsMenu();
    this.pressStratagemKeysCode(stratagem);
    this.closeStratagemsMenu();
  }

  private openStratagemsMenu() {
    if (UserPreferences.isHold) {
      robot.keyToggle(UserPreferences.openMenu, "down");
    } else {
      robot.keyTap(UserPreferences.openMenu);
    }
  }

  private pressStratagemKeysCode(stratagem: StratagemsModel) {
    const { keysCode } = stratagem;

    keysCode.forEach((key: string) => {
      this.simulateKeyOnKeyboard(key);
    });
  }

  private closeStratagemsMenu() {
    if (UserPreferences.isHold) {
      robot.keyToggle(UserPreferences.openMenu, "up");
    } else {
      robot.keyTap(UserPreferences.openMenu);
    }
  }

  private simulateKeyOnKeyboard(key: string) {
    robot.keyTap(key);
  }
}
