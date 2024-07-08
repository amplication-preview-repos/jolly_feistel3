import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ConversationWhereUniqueInput } from "../conversation/ConversationWhereUniqueInput";

export type ParticipantWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  conversation?: ConversationWhereUniqueInput;
};
