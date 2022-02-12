import Books from "./components/Books";
import Navbar from "./components/Navbar";
import ThemeContextProvider from "./TemeContext/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <Books />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
