import React, { createContext, useContext } from 'react';

const ThemeContext = createContext();

function AppContextApiTask11Example2() {
  const theme = 'dark';

  return (
    <ThemeContext.Provider value={theme}>
      <Header />
    </ThemeContext.Provider>
  );
}

function Header() {
  return <Navbar />;
}

function Navbar() {
  return <UserProfile />;
}

function UserProfile() {
  const theme = useContext(ThemeContext);

  return <p>Current theme: {theme}</p>;
}

export default AppContextApiTask11Example2;