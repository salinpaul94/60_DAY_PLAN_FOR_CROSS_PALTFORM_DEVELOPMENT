import React, { useState, useContext, createContext } from 'react';

const ThemeContext = createContext();

function AppHooks() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Toolbar />
    </ThemeContext.Provider>
  )
}

function Toolbar() {
  return (
    <div>
      <ThemedButton/>
      {/* The ThemeContext.Provider provides the theme and 
      setTheme values to any components within it 
      (in this case, the Toolbar and its children). */}
    </div>
  );
}

function ThemedButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  // useContext(ThemeContext) essentially pulls the value from 
  // the nearest ThemeContext.Provider in the component tree.

  return (
    <button
      style={{
        background: theme === 'light' ? '#fff' : '#000',
        color: theme === 'light' ? '#000' : '#fff'     
      }} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      Toggle Theme
    </button>
  );
}

export default AppHooks;