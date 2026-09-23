import { useState } from "react";
import { useTodos } from "../../context/TodosContext";
import styles from "./TodoForm.module.css";

export function TodoForm() {
  // the local state for the input text
  const [txt, setTxt] = useState("");

  // get the global todo(addTodo) from the context with not using props
  const { addTodo } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(txt);
    setTxt(""); // reset the local input state
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
