import { createContext, useState } from "react";
import Content from "./Content";
import "./theme.css";

export const ThemeContext = createContext("light");

export default function Theme() {
  const [theme, setTheme] = useState("light");

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <button onClick={handleClick}>Toggle theme</button>
        <Content />
      </ThemeContext.Provider>
    </div>
  );
}
