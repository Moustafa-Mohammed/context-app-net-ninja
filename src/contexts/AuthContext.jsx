import React, { useState, createContext } from "react";

export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthentication = () => {
    setIsAuthenticated(!isAuthenticated);
  };
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        handleAuthentication,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
