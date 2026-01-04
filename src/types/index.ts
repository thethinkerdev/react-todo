import type React from "react";

export type TodoType = {
  id: string;
  title: string;
  status: boolean;
  date: number;
};

export type UserSequenceSliceType = { count: number };

export type ChildrenType = {
  children: React.ReactNode;
};
