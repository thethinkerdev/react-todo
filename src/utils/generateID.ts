import { nanoid } from "nanoid";

export default function generateID(userSequence: number = 1) {
  return nanoid() + new Date().getTime() + "#" + (1 + userSequence);
}
