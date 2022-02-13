import React, { Component } from "react";
import { ThemeContext } from "../TemeContext/ThemeContext";

export default class Navbar extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLight, lightTheme, darkTheme } = this.context;
    const theme = isLight ? lightTheme : darkTheme;
    return (
      <div>
        <nav style={{ backgroundColor: theme.ui, color: theme.syntax }}>
          <h1>Context App</h1>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    );
  }
}
