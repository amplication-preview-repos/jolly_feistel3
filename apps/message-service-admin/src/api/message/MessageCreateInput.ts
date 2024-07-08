import { ConversationWhereUniqueInput } from "../conversation/ConversationWhereUniqueInput";

export type MessageCreateInput = {
  content?: string | null;
  timestamp?: Date | null;
  sender?: string | null;
  conversation?: ConversationWhereUniqueInput | null;
};
