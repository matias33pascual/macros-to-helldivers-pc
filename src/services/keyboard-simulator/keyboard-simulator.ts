/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */

import StratagemsModel from "../stratagems/stratagems-model";
import robot from "@jitsi/robotjs";
import UserPreferences from "./user-preferences";

export default class KeyboardSimulator {
  public setKeyboardDelay(delay: number): void {
    robot.setKeyboardDelay(delay);
  }

  public processStratagem(stratagem: StratagemsModel) {
    this.pressStratagemKeysCode(stratagem);
  }

  private pressStratagemKeysCode(stratagem: StratagemsModel) {
    const { keysCode } = stratagem;

    let pressKey = "";
    this.simulateHoldAtivationStratagem(true);
    keysCode.forEach((key: string) => {
      switch (key) {
        case "up":
          pressKey = UserPreferences.up;
          break;

        case "down":
          pressKey = UserPreferences.down;
          break;

        case "left":
          pressKey = UserPreferences.left;
          break;

        case "right":
          pressKey = UserPreferences.right;
          break;

        default:
          break;
      }

      if (key != "") {
        this.simulateKeyOnKeyboard(pressKey);
      } else {
        console.log(
          "Error en KeyboardSimulator.pressTratagemKeysCode: No se encontro la tecla del keycode de la estratagema."
        );
      }
    });
    this.simulateHoldAtivationStratagem(false);
  }

  private simulateKeyOnKeyboard(key: string) {
    robot.keyTap(key);
  }

  /**
   * Allows to simulate the hold activation of the stratagem menu.
   * @param active 
   * 
   */
  private simulateHoldAtivationStratagem(active: boolean) {
    console.log("KeyBoardSimulator.simulateHoldAtivationStratagem");
    robot.keyToggle("control", active ? "down" : "up");
  }
}
