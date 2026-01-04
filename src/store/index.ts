import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./slices/TodoSlice";
import UserSequenceSlice from "./slices/UserSequenceSlice";

const store = configureStore({
  reducer: {
    todo: TodoSlice.reducer,
    userSequence: UserSequenceSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
