import { useState } from "react";
import { useTodos } from "../../context/TodosContext";
import styles from "./TodoForm.module.css";

export function TodoForm() {
  const [txt, setTxt] = useState("");
  const { addTodo } = useTodos;

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(txt);
    setTxt("");
  };

  return (
    <form className={styles.containerForm} onSubmit={handleSubmit}>
      <input type="text" className={styles.inputContainer} placeholder="My list of things to do!" value={txt} onChange={(e) => setTxt(e.target.value)} />
      <button type="submit" className={styles.submitBtn}>
        Add
      </button>
    </form>
  );
}
