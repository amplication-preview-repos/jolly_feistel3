import { MessageUpdateManyWithoutConversationsInput } from "./MessageUpdateManyWithoutConversationsInput";
import { ParticipantUpdateManyWithoutConversationsInput } from "./ParticipantUpdateManyWithoutConversationsInput";

export type ConversationUpdateInput = {
  name?: string | null;
  messages?: MessageUpdateManyWithoutConversationsInput;
  participants?: ParticipantUpdateManyWithoutConversationsInput;
};
