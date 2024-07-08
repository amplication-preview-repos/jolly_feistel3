import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { ParticipantListRelationFilter } from "../participant/ParticipantListRelationFilter";

export type ConversationWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  messages?: MessageListRelationFilter;
  participants?: ParticipantListRelationFilter;
};
