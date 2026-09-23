import { useTodos } from "../../context/TodosContext";
import styles from "./TodoList.module.css";
export function TodoList() {
  const { todos, toggleTodo, removeTodo } = useTodos();

  return (
    <ul className={styles.todoList}>
      {todos.map((todo) => (
        <li key={todo.id} className={`${styles.todoItem} ${todo.done ? styles.completed : ""}`}>
          <input type="checkbox" checked={todo.done} onChange={() => toggleTodo(todo.id)} className={styles.checkbox} />
          <span className={styles.checkbox}>{todo.text}</span>
          <button onClick={() => removeTodo(todo.id)} className={styles.deleteBtn}>
            X
          </button>
        </li>
      ))}
    </ul>
  );
}
