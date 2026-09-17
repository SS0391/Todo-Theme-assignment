import { createContext, useContext, useState } from "react";

// a new context object to make the Theme

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Default theme is "Dark"
  const [theme, setTheme] = useState("dark");

  // Function that lets user switch between dark and light mode
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

// Hook

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("This must be used within a ThemeProvider");
  }
  return context;
}
