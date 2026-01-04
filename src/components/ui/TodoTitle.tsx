import type { ChildrenType } from "../../types";

export default function TodoTitle({ children }: ChildrenType) {
  return <h1 className="text-white text-3xl font-bold">{children}</h1>;
}
