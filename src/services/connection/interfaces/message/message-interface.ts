/* eslint-disable @typescript-eslint/no-explicit-any */
export interface MessageInterface {
  type: MessageType;
  value: any;
}

export enum MessageType {
  PrepareStratagems = "prepare-stratagems",
  UseStratagem = "use-stratagem",
  OtherType = "other-type",
}
