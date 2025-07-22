import { useContext } from "react";
import { ThemeContext } from "../usecontext/ThemeContext";

const Content = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: isDarkTheme ? "#9f1e1e" : "#f9f9f9",
        color: isDarkTheme ? "#fff" : "#000",
        padding: "2rem",
        minHeight: "200px",
      }}
    >
      <p>This is the content area.</p>
    </div>
  );
};

export default Content;
