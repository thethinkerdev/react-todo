import { useState } from "react";

const TodoForm = ({ addTodoHandler }) => {
  const [title, setTitle] = useState("");
  const [showAddTodo, setShowAddTodo] = useState(false)

  const passToHandler = (e) => {
    e.preventDefault();
    if (title.trim().length <= 0) return;

    addTodoHandler(title)
    setTitle('');
    setShowAddTodo(false)
  }

  const onChangeHandler = (e) => {
    const value = e.target.value.trim();

    (value.length > 0) ? setShowAddTodo(true) : setShowAddTodo(false)
    setTitle(e.target.value);




  }
  return (
    <form className="center mt-10 flex justify-center items-center gap-10" onSubmit={passToHandler}>
      <input
        autoFocus
        className="rounded-3xl grow text-[#767671] bg-[#1E1E1E] px-7 py-4"
        placeholder="write your next task "
        value={title}
        onChange={onChangeHandler}
      />
      <button className={`${showAddTodo ? "opacity-100" : "opacity-50"} my-bg-orange  grow-0 rounded-full p-2 flex justify-center items-center`}>
        <span className="material-symbols-outlined scale-90">add</span>
      </button>
    </form>
  );
};

export default TodoForm;
