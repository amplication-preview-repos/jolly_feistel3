import { Message } from "../message/Message";
import { Participant } from "../participant/Participant";

export type Conversation = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  messages?: Array<Message>;
  participants?: Array<Participant>;
};
