import React, { useState, useContext } from "react";
import { BooksContext } from "../contexts/BooksContext";
import { ThemeContext } from "../contexts/ThemeContext";
import Button from "./Button";
import { MdOutlineAddToPhotos } from "react-icons/md";

function NewBookForm() {
  const { addBook } = useContext(BooksContext);
  const { isLight, lightTheme, darkTheme } = useContext(ThemeContext);
  const theme = isLight ? lightTheme : darkTheme;
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(title, author);
    setTitle("");
    setAuthor("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{ backgroundColor: theme.ui, color: theme.syntax, padding: "8px" }}
    >
      <input
        className="input"
        style={{ display: "block", width: "100%", marginBottom: "1em" }}
        name="title"
        required
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="input"
        style={{ display: "block", width: "100%", marginBottom: "1em" }}
        name="author"
        required
        placeholder="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <Button>
        <MdOutlineAddToPhotos style={{ color: "green" }} />
      </Button>
    </form>
  );
}

export default NewBookForm;
