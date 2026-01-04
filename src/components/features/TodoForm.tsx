import { useState, type ChangeEvent } from "react";
import ButtonAdd from "../ui/ButtonAdd";
import InputForm from "../ui/InputForm";
import useTodos from "../../hooks/useTodos";

const TodoForm = () => {
  const { addTodoHandler } = useTodos();

  const [title, setTitle] = useState<string>("");
  const [isShowAddTodo, setIsShowAddTodo] = useState<boolean>(false);

  const passToHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.trim().length <= 0) return;

    addTodoHandler(title);

    setTitle("");
    setIsShowAddTodo(false);
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setIsShowAddTodo(value.trim().length > 0);
    setTitle(value);
  };
  return (
    <form
      className="center mt-10 flex justify-center items-center gap-10"
      onSubmit={passToHandler}
    >
      <InputForm title={title} onChangeHandler={onChangeHandler} />
      <ButtonAdd showAddTodo={isShowAddTodo} />
    </form>
  );
};

export default TodoForm;
