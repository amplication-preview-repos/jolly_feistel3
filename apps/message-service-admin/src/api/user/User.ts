import { JsonValue } from "type-fest";
import { Participant } from "../participant/Participant";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  participants?: Array<Participant>;
};
