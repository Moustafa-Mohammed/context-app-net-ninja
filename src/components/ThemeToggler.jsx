import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";
import Button from "./Button";
import { FaAffiliatetheme } from "react-icons/fa";

const ThemeToggler = () => {
  const { handleToggleTheme } = useContext(ThemeContext);
  const { handleAuthentication } = useContext(AuthContext);

  const handleClick = () => {
    handleToggleTheme();
    handleAuthentication();
  };

  return (
    <Button onClick={handleClick}>
      <FaAffiliatetheme />
    </Button>
  );
};

export default ThemeToggler;
