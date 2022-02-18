import Books from "./components/Books";
import Navbar from "./components/Navbar";
import ThemeToggler from "./components/ThemeToggler";
import AuthContextProvider from "./contexts/AuthContext";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ThemeContextProvider>
          <Navbar />
          <Books />
          <ThemeToggler />
        </ThemeContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
