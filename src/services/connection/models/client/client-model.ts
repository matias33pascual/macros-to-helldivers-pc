export class ClientModel {
  id: number;
  ws: any;

  constructor(id: number, ws: any) {
    this.id = id;
    this.ws = ws;
  }
}
