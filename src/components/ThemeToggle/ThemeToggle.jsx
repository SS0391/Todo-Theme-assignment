import { useTheme } from "../../context/ThemeContext";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  // get the theme state and toggle function from the global context
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles.toggleContainer}>
      <p className={styles.txt}>
        Current theme: <strong>{theme}</strong>
      </p>
      <button onClick={toggleTheme} className={styles.btn}>
        Change Theme
      </button>
    </div>
  );
}
