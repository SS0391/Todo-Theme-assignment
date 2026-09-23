import "./App.css";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle.jsx";
import { TodoForm } from "./components/TodoForm/TodoForm.jsx";
import { TodoList } from "./components/TodoList/TodoList";
import { useTheme } from "./context/ThemeContext.jsx";

function App() {
  const { theme } = useTheme();
  return (
    <div className={`app-container ${theme === "light" ? "app-light" : ""}`}>
      <ThemeToggle />
      <div className="app-card">
        <h1>Todo List</h1>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
