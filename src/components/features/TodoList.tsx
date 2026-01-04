import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import type { TodoType } from "../../types";
import { useEffect, useRef } from "react";
import { loadTodos, saveTodos } from "../../utils/localStorageUtil";
import { addListOfTodos } from "../../store/slices/TodoSlice";

const TodoList = () => {
const todosList = useSelector((state: RootState) => state.todo.list);
  const dispatch = useDispatch();
  
const isFirstRender = useRef(true);

useEffect(() => {
  const s = loadTodos();
  dispatch(addListOfTodos({ todos: s }));
}, []);

useEffect(() => {
  if (isFirstRender.current) {
    isFirstRender.current = false;
    return;
  }

  saveTodos(todosList);
}, [todosList]);

  return (
    <section className="center mt-10">
      {todosList.map((todo: TodoType) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </section>
  );
};

export default TodoList;
