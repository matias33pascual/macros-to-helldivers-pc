/* eslint-disable no-use-before-define */
/* eslint-disable class-methods-use-this */
/* eslint-disable lines-between-class-members */
/* eslint-disable no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-useless-constructor */

export default class StratagemsModel {
  public id = -1;
  public name = "";
  public icon = "";
  public keysCode: string[] = [];

  constructor(id: number, name: string, icon: string, keysCode: string[]) {
    this.id = id;
    this.name = name;
    this.icon = icon;
    this.keysCode = keysCode;
  }

  static fromJson(json: StratagemData): StratagemsModel {
    return new StratagemsModel(json.id, json.name, json.icon, json.keysCode);
  }

  public showData() {
    return `${this.id}: ${this.name} -> ${this.keysCode}`;
  }
}

export interface StratagemData {
  id: number;
  name: string;
  icon: string;
  keysCode: string[];
}
