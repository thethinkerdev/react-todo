import TodoItem from "./TodoItem";
import type { TodoType } from "../../types";
import { useEffect, useRef } from "react";
import { saveTodos } from "../../utils/localStorageUtil";
import { useAppSelector } from "../../store/hooks/hooks";

const TodoList = () => {
  const todosList = useAppSelector((state) => state.todo.list);

  const isFirstRender = useRef(true);

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
