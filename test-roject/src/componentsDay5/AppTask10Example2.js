import React from "react";

function AppTask10Example2() {
  const theme = 'dark';

  return <Header theme = { theme } />;
}

function Header({ theme }) {
  return <Navbar theme = { theme } />;
}

function Navbar({ theme }) {
  return <UserProfile theme = { theme } />;
}

function UserProfile({ theme }) {
  return <p>Current theme: {theme}</p>;
}

export default AppTask10Example2;