import React, { useContext } from "react";
import { BooksContext } from "../contexts/BooksContext";
import { ThemeContext } from "../contexts/ThemeContext";

function BookDetails({ book }) {
  const { removeBook } = useContext(BooksContext);
  const { isLight, lightTheme, darkTheme } = useContext(ThemeContext);
  const theme = isLight ? lightTheme : darkTheme;

  return (
    <li style={{ backgroundColor: theme.ui, color: theme.syntax }}>
      <div>{book.title}</div>
      <div>by: {book.author}</div>
      <button onClick={() => removeBook(book.id)}>Remove book</button>
    </li>
  );
}

export default BookDetails;
