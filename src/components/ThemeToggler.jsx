import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";
import Button from "./Button";
import { FaAffiliatetheme } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";

const ThemeToggler = () => {
  const { handleToggleTheme, isLight } = useContext(ThemeContext);
  const { handleAuthentication } = useContext(AuthContext);

  const handleClick = () => {
    handleToggleTheme();
    handleAuthentication();
  };

  return (
    <Button onClick={handleClick}>
      {isLight ? <MdOutlineLightMode /> : <FaAffiliatetheme />}
    </Button>
  );
};

export default ThemeToggler;
