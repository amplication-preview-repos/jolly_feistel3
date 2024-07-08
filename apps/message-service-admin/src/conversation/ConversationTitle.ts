import { Conversation as TConversation } from "../api/conversation/Conversation";

export const CONVERSATION_TITLE_FIELD = "name";

export const ConversationTitle = (record: TConversation): string => {
  return record.name?.toString() || String(record.id);
};
