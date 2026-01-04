import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store";
import {
  addTodo,
  removeTodo,
  toggleStatusTodo,
  updateTitleTodo,
} from "../store/slices/TodoSlice";

export default function useTodos() {
  const dispatch = useDispatch();
  const todosList = useSelector((state: RootState) => state.todo.list);
  const userSequence = useSelector(
    (state: RootState) => state.userSequence.count
  );

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
