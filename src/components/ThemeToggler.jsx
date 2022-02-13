import React from "react";
import { ThemeContext } from "../TemeContext/ThemeContext";

function ThemeToggler({ handleToggleTheme }) {
  return (
    <ThemeContext.Consumer>
      {(context) => {
        return (
          <button onClick={context.handleToggleTheme}>toggle theme</button>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default ThemeToggler;
