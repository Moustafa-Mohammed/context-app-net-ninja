import Books from "./components/Books";
import Navbar from "./components/Navbar";
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
            <Books />
          </BooksContextProvider>
          <ThemeToggler />
        </ThemeContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
