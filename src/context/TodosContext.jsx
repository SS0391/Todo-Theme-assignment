import { createContext, useContext, useState } from "react";

const TodosContext = createContext();

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([{ id: 1, text: "Learn some React", done: false }]);

  const addTodo = (text) => {
    if (!text.trim()) return;
    const newTodo = {
      id: Date.now(),
      text: text,
      done: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)));
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return <TodosContext.Provider value={{ todos, addTodo, toggleTodo, removeTodo }}>{children}</TodosContext.Provider>;
}

export function useTodos() {
  return useContext(TodosContext);
}
