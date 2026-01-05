import {
  addTodo,
  removeTodo,
  toggleStatusTodo,
  updateTitleTodo,
} from "../store/slices/TodoSlice";

import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";

export default function useTodos() {
  const dispatch = useAppDispatch();
  const todosList = useAppSelector((state) => state.todo.list);
  const userSequence = useAppSelector((state) => state.userSequence.count);

  const addTodoHandler = (title: string) => {
    dispatch(
      addTodo({
        title,
        userSequence,
      })
    );
  };

  const deleteTodoHandler = (todoID: string) => {
    dispatch(
      removeTodo({
        todoID,
      })
    );
  };

  const toggleTodoHandler = (todoID: string) => {
    dispatch(
      toggleStatusTodo({
        todoID,
      })
    );
  };

  const updateTitleHandler = (todoID: string, title: string) => {
    dispatch(
      updateTitleTodo({
        todoID,
        title,
      })
    );
  };
  return {
    todosList,
    addTodoHandler,
    deleteTodoHandler,
    toggleTodoHandler,
    updateTitleHandler,
  };
}
