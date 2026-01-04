import type { TodoType } from "../types";

export const loadTodos = () => {
  try {
    return JSON.parse(localStorage.getItem("todos") ?? "[]");
  } catch {
    console.warn("Failed to LoadTodos");
    return [];
  }
};

export const saveTodos = (todos: TodoType[]) => {
  try {
    localStorage.setItem("todos", JSON.stringify(todos));
  } catch {
    console.warn("Failed to saveTodos");
  }
};
