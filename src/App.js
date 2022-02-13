import Books from "./components/Books";
import Navbar from "./components/Navbar";
import ThemeToggler from "./components/ThemeToggler";
import ThemeContextProvider from "./TemeContext/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <Books />
        <ThemeToggler />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
