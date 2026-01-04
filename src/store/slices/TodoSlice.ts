import { createSlice } from "@reduxjs/toolkit";
import type { TodoType } from "../../types";
import generateID from "../../utils/generateID";

const initialState: { list: TodoType[] } = { list: [] };

const TodoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    addTodo: (state: { list: TodoType[] }, { payload }) => {
      const title: string = payload.title;
      const userSequence: number = payload.UserSequence;

      const newTodo: TodoType = {
        id: generateID(userSequence),
        date: new Date().getTime(),
        status: false,
        title,
      };

      //add the new todo to the beginning of list :
      state.list.unshift(newTodo);
    },
    removeTodo(state: { list: TodoType[] }, action) {
      state.list = state.list.filter(
        (todo) => todo.id !== action.payload.todoID
      );
    },
    toggleStatusTodo(state: { list: TodoType[] }, action) {
      state.list = state.list.map((todo) => {
        if (todo.id === action.payload.todoID) todo.status = !todo.status;
        return todo;
      });
    },
    updateTitleTodo(state: { list: TodoType[] }, action) {
      state.list = state.list.map((todo) => {
        if (todo.id === action.payload.todoID)
          todo.title = action.payload.title;

        return todo;
      });
    },

    addListOfTodos(state: { list: TodoType[] }, action) {
      state.list = action.payload.todos;
    },
  },
});

export const {
  addTodo,
  removeTodo,
  toggleStatusTodo,
  updateTitleTodo,
  addListOfTodos,
} = TodoSlice.actions;

export default TodoSlice;
