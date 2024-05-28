/* eslint-disable lines-between-class-members */
/* eslint-disable no-empty */
/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-unused-vars */

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

import fs from "fs";
import path from "path";
import StratagemModel, { StratagemData } from "./stratagems-model";
import KeyboardSimulator from "../keyboard-simulator/keyboard-simulator";
import UserPreferences from "../keyboard-simulator/user-preferences";

export default class StratagemsManager {
  private completeStratagemsList: StratagemModel[] = [];
  private preparedStratagemsList: StratagemModel[] = [];

  private keyboardSimulator: KeyboardSimulator = new KeyboardSimulator();

  constructor(keyboardDelay = 10) {
    this.loadStratagems();
    this.keyboardSimulator.setKeyboardDelay(keyboardDelay);
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

    console.log(this.preparedStratagemsList);
  }

  public handleStratagemById(id: number): void {
    const stratagemInList: StratagemModel | undefined = this.getStratagemById(
      id,
      this.preparedStratagemsList
    );

    if (stratagemInList !== undefined) {
      this.useStratagem(stratagemInList);
    }
  }

  public handleStratagemTestById(id: number): void {
    const stratagem: StratagemModel | undefined = this.getStratagemById(
      id,
      this.completeStratagemsList
    );

    if (stratagem) {
      console.log(stratagem);
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

    const keyscodeMapedToUserPreferences: string[] =
      UserPreferences.mapStratagemKeycodeToUserPreferences(stratagem);

    preparedStratagem.keysCode = keyscodeMapedToUserPreferences;

    return preparedStratagem;
  }

  private getStratagemById(
    id: number,
    stratagemsList: StratagemModel[]
  ): StratagemModel | undefined {
    const selectedStratagem: StratagemModel | undefined = stratagemsList.find(
      (stratagem: StratagemModel) => {
        // eslint-disable-next-line eqeqeq
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
    const jsonDirectoryPath: string = path.join(__dirname, "json");

    try {
      this.loadStratagemsDirectory(jsonDirectoryPath);
    } catch (error) {
      console.log(`Error en StratagemsManager.loadStratagems: ${error}`);
    }
  }

  private loadStratagemsDirectory(directoryPath: string): void {
    const files = fs.readdirSync(directoryPath);

    files.forEach((file) => {
      if (file.endsWith(".json")) {
        const filePath = path.join(directoryPath, file);

        this.loadStratagemFile(filePath);
      }
    });
  }

  private loadStratagemFile(jsonFilePath: string): void {
    const jsonData: string = fs.readFileSync(jsonFilePath, "utf-8");

    const stratagemsData: StratagemData[] = JSON.parse(jsonData);

    stratagemsData.forEach((stratagemData: StratagemData) => {
      this.completeStratagemsList.push(StratagemModel.fromJson(stratagemData));
    });
  }

  /** Para usar en los test */
  public showCompleteStratagemsList() {
    this.completeStratagemsList.forEach((stratagem) => {
      console.log(stratagem.showData());
    });
  }

  public showPreparedStratagemsList() {
    this.preparedStratagemsList.forEach((stratagem) => {
      console.log(stratagem.showData());
    });
  }
}
