import TodoForm from "../features/TodoForm";
import TodoHeader from "../layout/TodoHeader";
import TodoList from "../features/TodoList";

const TodoContainer = () => {
  return (
    <div className="todo-container bg-[#0d0d0d] mx-auto my-10 rounded-4xl py-8 px-28 max-w-[1440px]">
      <TodoHeader />
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default TodoContainer;
