import { SortOrder } from "../../util/SortOrder";

export type ParticipantOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  conversationId?: SortOrder;
};
