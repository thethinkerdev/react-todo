import { useState } from "react";
import Tip from "./Tip";
import TodoForm from "./TodoForm";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import { nanoid } from "nanoid";
const TodoContainer = ({ userSequence, addUserSequenceHandler }) => {
  const [todosList, setTodosList] = useState([]);

  const addTodoHandler = (title) => {

    const newTodo = {
      id: nanoid() + new Date().getTime() + "#" + (userSequence + 1),
      title,
      date: new Date().getTime(),
      status: 0
    }
    setTodosList([newTodo, ...todosList])
    addUserSequenceHandler()
  }


  const deleteTodoHandler = (e) => {
    const todoID = e.target.dataset.todoid;

    const newTodos = todosList.filter(todo => todo.id !== todoID)

    setTodosList(newTodos)
  }

  const doneTodoHandler = (e) => {
    const { target } = e;
    const todoID = target.dataset.todoid;

    const newTodos = todosList.map(todo => {
      if (todo.id === todoID) {
        todo.status = (todo.status === 1) ? 0 : 1;

      }
      return todo;
    })

    setTodosList(newTodos)
  }

  const updateTitleHandler = ({todoID, title}) => {
    
    const newTodos = todosList.map(todo => {
      if (todo.id === todoID) {
        todo.title = title
        
      }

      console.log(todo);
      
      return todo
    })

    setTodosList(newTodos)

  }
  
  return (
    <div className="todo-container bg-[#0d0d0d] mx-auto my-10 rounded-4xl py-8 px-28 max-w-[1440px]">
      <TodoHeader />
      <Tip todos={todosList} />
      <TodoForm addTodoHandler={addTodoHandler} />
      <TodoList todosList={todosList} deleteTodoHandler={deleteTodoHandler} doneTodoHandler={doneTodoHandler} updateTitleHandler={updateTitleHandler} />
    </div>
  );
};

export default TodoContainer;
