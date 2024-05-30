import { MessageInterface } from '../message/message-interface';
import { Subscriber } from '../subscriber/subscriber-interface';

export interface Publisher {
  addSubscriber(subscriber: Subscriber): void;
  removeSubscriber(subscriber: Subscriber): void;
  notifySubscribers(message: MessageInterface): void;
}
