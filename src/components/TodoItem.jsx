import { useState } from "react";

const TodoItem = ({ todo, deleteTodoHandler, doneTodoHandler, updateTitleHandler }) => {
  const date = new Date(todo.date);
  const [title, setTitle] = useState(todo.title);

  const customDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} * ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  const [editMode, setEditMode] = useState(false)

  const editModeHandler = () => setEditMode(!editMode)
  const passUpdateTitleHandler = (e) => {
    if (e.key == 'Enter') {
      updateTitleHandler(
        {
          todoID: e.target.dataset.todoid,
          title
        }
      )
      setEditMode(false)
    }
  }
  return (
    <section className="border border-[#797978] rounded-2xl flex items-center px-5 py-5 mt-5  justify-between">
      <div className="flex items-center  gap-5">
        {todo.status ?
          <span data-todoid={todo.id} onClick={doneTodoHandler} className="w-7 h-7 border-2 rounded-full select-none block my-border-orange cursor-pointer material-symbols-outlined text-white">
            check
          </span>
          :
          <span data-todoid={todo.id} onClick={doneTodoHandler} className="w-7 h-7 border-2 rounded-full block my-border-orange select-none cursor-pointer"></span>
        }
        {editMode
          ?
          <input
            autoFocus
            className="rounded-3xl grow text-[#767671] bg-[#1E1E1E] px-7 py-4"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={passUpdateTitleHandler}
            data-todoid={todo.id}
          />
          // </form>
          :
          <h1 className="text-white text-3xl font-bold">{todo.title}</h1>
        }
        <p className="text-white">{customDate}</p>
      </div>
      <div className="flex gap-4 text-white">
        <button className="material-symbols-outlined" onClick={editModeHandler}>edit_square</button>
        <button className="material-symbols-outlined cursor-pointer" data-todoid={todo.id} onClick={deleteTodoHandler}>delete</button>
      </div>
    </section>
  );
};

export default TodoItem;
