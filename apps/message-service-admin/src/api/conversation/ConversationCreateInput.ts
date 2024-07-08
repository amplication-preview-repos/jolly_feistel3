import { MessageCreateNestedManyWithoutConversationsInput } from "./MessageCreateNestedManyWithoutConversationsInput";
import { ParticipantCreateNestedManyWithoutConversationsInput } from "./ParticipantCreateNestedManyWithoutConversationsInput";

export type ConversationCreateInput = {
  name?: string | null;
  messages?: MessageCreateNestedManyWithoutConversationsInput;
  participants?: ParticipantCreateNestedManyWithoutConversationsInput;
};
