import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";
import ThemeToggler from "./ThemeToggler";

const Navbar = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { isLight, lightTheme, darkTheme } = useContext(ThemeContext);
  const theme = isLight ? lightTheme : darkTheme;

  return (
    <nav style={{ backgroundColor: theme.ui, color: theme.syntax }}>
      <h1>Context App</h1>
      <div>{isAuthenticated ? "Logged in" : "Logged out"}</div>
      <div className="navbar-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <ThemeToggler />
      </div>
    </nav>
  );
};
export default Navbar;
