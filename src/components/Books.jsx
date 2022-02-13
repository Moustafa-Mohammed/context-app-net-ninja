import React, { Component } from "react";
import { ThemeContext } from "../TemeContext/ThemeContext";

export default class Books extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(context) => {
          const { isLight, lightTheme, darkTheme } = context;
          const theme = isLight ? lightTheme : darkTheme;
          return (
            <div
              className="book-list"
              style={{ backgroundColor: theme.bg, color: theme.syntax }}
            >
              <ul>
                <li style={{ backgroundColor: theme.ui }}>Book 1</li>
                <li style={{ backgroundColor: theme.ui }}>Book 2</li>
                <li style={{ backgroundColor: theme.ui }}>Book 3</li>
              </ul>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
