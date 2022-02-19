import React, { useState, createContext } from "react";
import { v4 as uuid } from "uuid";

export const BooksContext = createContext();

const BooksContextProvider = ({ children }) => {
  const [books, setBooks] = useState([
    { title: "Book 1", author: "Mostafa", id: uuid() },
    { title: "Book 2", author: "Islam", id: uuid() },
    { title: "Book 3", author: "Shehab", id: uuid() },
  ]);
  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuid() }]);
  };

  const removeBook = (id) => {
    const filteredBooks = books.filter((book) => book.id !== id);
    setBooks(filteredBooks);
  };
  return (
    <BooksContext.Provider value={{ books, removeBook, addBook }}>
      {children}
    </BooksContext.Provider>
  );
};

export default BooksContextProvider;
