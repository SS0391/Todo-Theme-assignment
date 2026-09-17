import "./App.css";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

function App() {
  const { theme } = useTheme();
  return (
    <div className={`app-container ${theme === "light" ? "app-light" : ""}`}>
      <h1>useEffect Assignment Theme and Todo List</h1>
      <ThemeToggle />
    </div>
  );
}

export default App;
