import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  const value = {
    user,
    theme,
    setUser,
    toggleTheme,

  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};