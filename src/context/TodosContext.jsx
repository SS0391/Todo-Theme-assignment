import { createContext, useContext, useState } from "react";

const TodosContext = createContext();

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    if (!text.trim()) return;
    const newTodo = {
      id: Date.now(), // A way to generete unique ID based on timestamps
      text: text,
      done: false,
    };
    // preserv old todos when updating and adding new todos
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  // is for setting status on checkbox
  const toggleTodo = (id) => {
    setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)));
  };
  // is for removing todos from the list
  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return <TodosContext.Provider value={{ todos, addTodo, toggleTodo, removeTodo }}>{children}</TodosContext.Provider>;
}

// custom hook to consume TodosContext much easier
export function useTodos() {
  return useContext(TodosContext);
}
