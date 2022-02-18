import React, { useContext } from "react";
import { BooksContext } from "../contexts/BooksContext";
import { ThemeContext } from "../contexts/ThemeContext";

const Books = () => {
  const { isLight, lightTheme, darkTheme } = useContext(ThemeContext);
  const { books } = useContext(BooksContext);
  const theme = isLight ? lightTheme : darkTheme;
  return (
    <div
      className="book-list"
      style={{ backgroundColor: theme.bg, color: theme.syntax }}
    >
      <ul>
        {books.map((book) => (
          <li key={book.id} style={{ backgroundColor: theme.ui }}>
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
