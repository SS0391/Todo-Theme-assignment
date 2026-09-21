import "./App.css";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle.jsx";
import { TodoForm } from "./components/TodoForm/TodoForm.jsx";
import { TodoList } from "./components/TodoList/TodoList";
import { useTheme } from "./context/ThemeContext.jsx";

function App() {
  const { theme } = useTheme();
  return (
    <div className={`app-container ${theme === "light" ? "app-light" : ""}`}>
      <h1>useEffect Assignment Theme and Todo List</h1>
      <ThemeToggle />
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
