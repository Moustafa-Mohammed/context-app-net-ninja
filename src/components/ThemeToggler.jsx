import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeToggler = () => {
  const { handleToggleTheme } = useContext(ThemeContext);
  const { handleAuthentication } = useContext(AuthContext);

  const handleClick = () => {
    handleToggleTheme();
    handleAuthentication();
  };

  return <button onClick={handleClick}>toggle theme</button>;
};

export default ThemeToggler;
