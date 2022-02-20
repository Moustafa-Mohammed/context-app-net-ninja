import React, { useContext } from "react";
import { BooksContext } from "../contexts/BooksContext";
import { ThemeContext } from "../contexts/ThemeContext";
import Button from "./Button";
import { MdRemoveCircleOutline } from "react-icons/md";

function BookDetails({ book }) {
  const { removeBook } = useContext(BooksContext);
  const { isLight, lightTheme, darkTheme } = useContext(ThemeContext);
  const theme = isLight ? lightTheme : darkTheme;

  return (
    <li
      className="book"
      style={{ backgroundColor: theme.ui, color: theme.syntax }}
    >
      <span>{book.title}</span>
      <span>by: {book.author}</span>
      <Button onClick={() => removeBook(book.id)}>
        <MdRemoveCircleOutline style={{ color: "red" }} />
      </Button>
    </li>
  );
}

export default BookDetails;
