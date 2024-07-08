import { Conversation } from "../conversation/Conversation";

export type Message = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  timestamp: Date | null;
  sender: string | null;
  conversation?: Conversation | null;
};
