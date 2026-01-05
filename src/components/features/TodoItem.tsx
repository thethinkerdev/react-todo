import React, { useState } from "react";
import type { TodoType } from "../../types";
import TodoTitle from "../ui/TodoTitle";
import generateCustomDate from "../../utils/geneateCustomDate";
import ButtonRemove from "../ui/ButtonRemove";
import ButtonEdit from "../ui/ButtonEdit";
import CheckMarkTodo from "../ui/CheckMarkTodo";
import useTodos from "../../hooks/useTodos";

const TodoItem = (todo: TodoType) => {
  const { updateTitleHandler } = useTodos();

  const [title, setTitle] = useState<string>(todo.title);

  const customDate = generateCustomDate(new Date(todo.date));
  const [editMode, setEditMode] = useState(false);

  const editModeHandler = () => setEditMode(!editMode);

  const passUpdateTitleHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      updateTitleHandler(todo.id, title);
      setEditMode(false);

      
    }
  };
  return (
    <section className="border border-[#797978] rounded-2xl flex items-center px-5 py-5 mt-5  justify-between">
      <div className="flex items-center  gap-5">
        <CheckMarkTodo status={todo.status} todoID={todo.id} />
        {editMode ? (
          <input
            autoFocus
            className="rounded-3xl grow text-[#767671] bg-[#1E1E1E] px-7 py-4"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={(e) => passUpdateTitleHandler(e)}
          />
        ) : (
          <TodoTitle>{todo.title}</TodoTitle>
        )}
        <p className="text-white">{customDate}</p>
      </div>
      <div className="flex gap-4 text-white">
        <ButtonEdit editModeHandler={editModeHandler} />
        <ButtonRemove todoID={todo.id} />
      </div>
    </section>
  );
};

export default TodoItem;
