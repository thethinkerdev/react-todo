import TodoItem from "./TodoItem";

const TodoList = ({ todosList, deleteTodoHandler, doneTodoHandler, updateTitleHandler }) => {
  return <section className="center mt-10">
    {todosList.map(todo => <TodoItem key={todo.id} todo={todo} deleteTodoHandler={deleteTodoHandler} doneTodoHandler={doneTodoHandler} updateTitleHandler={updateTitleHandler} />)}
  </section>;
};

export default TodoList;
