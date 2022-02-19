import React, { useContext } from "react";
import { BooksContext } from "../contexts/BooksContext";
import { ThemeContext } from "../contexts/ThemeContext";
import BookDetails from "./BookDetails";

const BookList = () => {
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
          <BookDetails
            key={book.id}
            book={book}
            style={{ backgroundColor: theme.ui }}
          />
        ))}
      </ul>
    </div>
  );
};

export default BookList;
