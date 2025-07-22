import { useContext } from "react";
import { ThemeContext } from "../usecontext/ThemeContext";

const Header = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <header
      style={{
        background: isDarkTheme ? "#333" : "#eee",
        color: isDarkTheme ? "#fff" : "#000",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      <h1>Theme Toggle App</h1>
      <button onClick={toggleTheme}>
        Switch to {isDarkTheme ? "Light" : "Dark"} Mode
      </button>
    </header>
  );
};

export default Header;
