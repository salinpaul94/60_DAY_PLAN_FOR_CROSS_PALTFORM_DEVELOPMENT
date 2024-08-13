import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

function AppContextApiTask5Example2() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemeButton />
    </div>
  );
}

function ThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      style={{ background: theme === 'light' ? '#fff' : '#000',
               color: theme === 'light' ? '#000' : '#fff'
            }}
            onClick={() => setTheme( theme === 'light' ? 'dark' : 'light')}
    >
      Toggle Theme
    </button>
  );
}

export default AppContextApiTask5Example2;