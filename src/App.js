import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import NewBookForm from "./components/NewBookForm";
import ThemeToggler from "./components/ThemeToggler";
import AuthContextProvider from "./contexts/AuthContext";
import BooksContextProvider from "./contexts/BooksContext";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ThemeContextProvider>
          <Navbar />
          <BooksContextProvider>
            <NewBookForm />
            <BookList />
          </BooksContextProvider>
          <ThemeToggler />
        </ThemeContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
