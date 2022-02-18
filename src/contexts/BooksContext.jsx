import React, { useState, createContext } from "react";
import { v4 as uuid } from "uuid";

export const BooksContext = createContext();

const BooksContextProvider = ({ children }) => {
  const [books, setBooks] = useState([
    { title: "Book 1", id: uuid() },
    { title: "Book 2", id: uuid() },
    { title: "Book 3", id: uuid() },
  ]);
  return (
    <BooksContext.Provider value={{ books }}>{children}</BooksContext.Provider>
  );
};

export default BooksContextProvider;
