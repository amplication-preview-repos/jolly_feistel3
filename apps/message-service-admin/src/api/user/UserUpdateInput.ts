import { InputJsonValue } from "../../types";
import { ParticipantUpdateManyWithoutUsersInput } from "./ParticipantUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  participants?: ParticipantUpdateManyWithoutUsersInput;
};
