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
