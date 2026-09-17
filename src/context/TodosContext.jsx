import { createContext, useState } from "react";

const TodosContext = createContext();

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([{ id: 1, text: "Learn some React", done: false }]);

  const addTodo = (txt) => {
    if (!txt.trim()) return;
    const newTodo = {
      id: Date.now(),
      text: txt,
      done: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)));
  };
}
