import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ConversationWhereUniqueInput } from "../conversation/ConversationWhereUniqueInput";

export type ParticipantUpdateInput = {
  user?: UserWhereUniqueInput | null;
  conversation?: ConversationWhereUniqueInput | null;
};
