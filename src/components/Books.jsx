import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Books = () => {
  const { isLight, lightTheme, darkTheme } = useContext(ThemeContext);
  const theme = isLight ? lightTheme : darkTheme;
  return (
    <div
      className="book-list"
      style={{ backgroundColor: theme.bg, color: theme.syntax }}
    >
      <ul>
        <li style={{ backgroundColor: theme.ui }}>Book 1</li>
        <li style={{ backgroundColor: theme.ui }}>Book 2</li>
        <li style={{ backgroundColor: theme.ui }}>Book 3</li>
      </ul>
    </div>
  );
};

export default Books;
