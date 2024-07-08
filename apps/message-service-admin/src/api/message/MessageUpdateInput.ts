import { ConversationWhereUniqueInput } from "../conversation/ConversationWhereUniqueInput";

export type MessageUpdateInput = {
  content?: string | null;
  timestamp?: Date | null;
  sender?: string | null;
  conversation?: ConversationWhereUniqueInput | null;
};
