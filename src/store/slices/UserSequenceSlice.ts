import { createSlice } from "@reduxjs/toolkit";
import type { UserSequenceSliceType } from "../../types";

const initialState: UserSequenceSliceType = { count: 0 };

const UserSequenceSlice = createSlice({
  name: "user-sequence-slice",
  initialState,
  reducers: {
    addUserSequence(state: UserSequenceSliceType) {
      state.count++;
    },
  },
});

export default UserSequenceSlice;

export const { addUserSequence } = UserSequenceSlice.actions;
