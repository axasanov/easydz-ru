import React, { createContext, useState } from 'react';

export const AppContext = createContext({
  basename: ''
});

export const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AppContext.Provider value={{ isLoggedIn, login, logout, basename: process.env.PUBLIC_URL }}>
      {children}
    </AppContext.Provider>
  );
};
