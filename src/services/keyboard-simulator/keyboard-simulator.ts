/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */

import StratagemsModel from "../stratagems/stratagems-model";
import robot from "@jitsi/robotjs";

export default class KeyboardSimulator {
  public setKeyboardDelay(delay: number): void {
    robot.setKeyboardDelay(delay);
  }

  public processStratagem(stratagem: StratagemsModel) {
    this.pressStratagemKeysCode(stratagem);
  }

  private pressStratagemKeysCode(stratagem: StratagemsModel) {
    const { keysCode } = stratagem;

    keysCode.forEach((key: string) => {
      this.simulateKeyOnKeyboard(key);
    });
  }

  private simulateKeyOnKeyboard(key: string) {
    robot.keyTap(key);
  }
}
