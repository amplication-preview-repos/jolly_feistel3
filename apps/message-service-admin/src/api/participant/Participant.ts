import { User } from "../user/User";
import { Conversation } from "../conversation/Conversation";

export type Participant = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user?: User | null;
  conversation?: Conversation | null;
};
