/* eslint-disable no-use-before-define */
/* eslint-disable lines-between-class-members */

export default class MessageModel {
  public code: number;
  public body: MessageBody;

  constructor(code: number, body: MessageBody) {
    this.code = code;
    this.body = body;
  }
}

export enum MessageCodes {
  testingStratagem = 100,
  prepareStratagems = 200,
  useStratagem = 300,
  missionFinished = 400,
}

export interface UseStratagemMessage {
  id: number;
}

export interface PrepareStratagemsMessage {
  ids: number[];
}

export type MessageBody = UseStratagemMessage | PrepareStratagemsMessage;
