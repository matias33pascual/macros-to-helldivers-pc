/**
 * Responsabilidades:
 * . Carga todas las estratagemas del directorio json.
 *        -> loadStratagems
 *
 * . Carga una lista con las estratagemnas seleccionadas para la mision y
 *   mapea los keyscode de cada estratagema seleccionada para la mision segun las
 *   preferencias de teclas del usuario.
 *        -> prepareSelectedStratagemsListByIds
 *
 * . Envia la estratagema seleccionada por el mobile al KeyboardSimulator para que
 *   presione las teclas correspondientes.
 *        -> handleStratagemById
 *
 * . Permite testear si las estratagemas estan siendo reconocidas entre el
 *   mobile y la computadora.
 *        -> handleStratagemTestById
 */

import StratagemModel from "./stratagems-model";
import KeyboardSimulator from "../keyboard-simulator/keyboard-simulator";
import UserPreferences from "../keyboard-simulator/user-preferences";
import { Subscriber } from "../connection/interfaces/subscriber/subscriber-interface";
import {
  MessageInterface,
  MessageType,
} from "../connection/interfaces/message/message-interface";

import jsonStratagems from "./json/stratagems.json";

export default class StratagemsManager implements Subscriber {
  private completeStratagemsList: StratagemModel[] = [];

  private preparedStratagemsList: StratagemModel[] = [];

  private keyboardSimulator: KeyboardSimulator = new KeyboardSimulator();

  constructor(keyboardDelay = 25) {
    this.loadStratagems();
    this.keyboardSimulator.setKeyboardDelay(keyboardDelay);
  }

  update(message: MessageInterface): void {
    let messageValue: number[];

    switch (message.type) {
      case MessageType.PrepareStratagems:
        messageValue = message.value.map((e: string) => Number.parseInt(e));
        this.prepareSelectedStratagemsListByIds(messageValue);
        break;

      case MessageType.UseStratagem:
        this.handleStratagemById(message.value);
        break;
    }
  }

  public prepareSelectedStratagemsListByIds(
    selectedStratagemsIds: number[]
  ): void {
    if (this.preparedStratagemsList.length !== 0) {
      this.preparedStratagemsList = [];
    }

    selectedStratagemsIds.forEach((id: number) => {
      const stratagem: StratagemModel | undefined = this.getStratagemById(
        id,
        this.completeStratagemsList
      );

      if (stratagem !== undefined) {
        const preparedStratagem: StratagemModel =
          this.prepareStratagem(stratagem);

        this.preparedStratagemsList.push(preparedStratagem);
      }
    });
  }

  public handleStratagemById(id: number): void {
    const stratagem: StratagemModel | undefined = this.getStratagemById(
      id,
      this.preparedStratagemsList
    );

    if (stratagem !== undefined) {
      this.useStratagem(stratagem);
    }
  }

  private prepareStratagem(stratagem: StratagemModel): StratagemModel {
    const { id, name, icon, keysCode } = stratagem;

    const preparedStratagem: StratagemModel = new StratagemModel(
      id,
      name,
      icon,
      keysCode
    );

    return preparedStratagem;
  }

  private getStratagemById(
    id: number,
    stratagemsList: StratagemModel[]
  ): StratagemModel | undefined {
    const selectedStratagem: StratagemModel | undefined = stratagemsList.find(
      (stratagem: StratagemModel) => {
        return stratagem.id == id;
      }
    );

    return selectedStratagem;
  }

  private useStratagem(stratagem: StratagemModel): void {
    console.log(stratagem.keysCode);
    this.keyboardSimulator.processStratagem(stratagem);
  }

  private loadStratagems(): void {
    jsonStratagems.forEach((stratagem) => {
      const stratagemModel: StratagemModel = new StratagemModel(
        Number.parseInt(stratagem.id),
        stratagem.name,
        stratagem.icon,
        stratagem.keysCode
      );

      this.completeStratagemsList.push(stratagemModel);
    });
  }
}
