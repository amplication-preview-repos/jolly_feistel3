import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ConversationWhereUniqueInput } from "../conversation/ConversationWhereUniqueInput";

export type ParticipantCreateInput = {
  user?: UserWhereUniqueInput | null;
  conversation?: ConversationWhereUniqueInput | null;
};
