import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

function AppContextApiTask7Example2() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header />
      <Main />
    </ThemeContext.Provider>
  );
}

function Header() {
  const { theme } = useContext(ThemeContext);

  return (
    <header style={{ 
        background: theme === 'light' ? '#fff': '#000', 
        color: theme === 'light' ? '#000' : '#fff'
      }}>
        {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
    </header>
  );
}

function Main() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <main>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </main>
  );
}

export default AppContextApiTask7Example2;