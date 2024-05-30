import { MessageInterface } from '../message/message-interface';

export interface Subscriber {
  update(message: MessageInterface): void;
}
