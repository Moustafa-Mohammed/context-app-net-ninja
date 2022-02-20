import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function Button({ onClick, children }) {
  const { isLight, lightTheme, darkTheme } = useContext(ThemeContext);
  const theme = isLight ? lightTheme : darkTheme;
  return (
    <button
      className="btn"
      style={{ backgroundColor: theme.ui, color: theme.syntax }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
