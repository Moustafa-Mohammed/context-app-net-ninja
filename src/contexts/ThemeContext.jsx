import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    isLight: true,
    lightTheme: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    darkTheme: { syntax: "#ddd", ui: "#333", bg: "#555" },
  });

  const handleToggleTheme = () => {
    setTheme({ ...theme, isLight: !theme.isLight });
  };
  return (
    <div>
      <ThemeContext.Provider value={{ ...theme, handleToggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
};

export default ThemeContextProvider;
