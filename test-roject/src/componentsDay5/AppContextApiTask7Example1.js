import React, { createContext, useState } from 'react';

const AuthContext = createContext();

function AppContextApiTask7Example1() {
  const [auth, setAuth] = useState({ isAuthenticated: false });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <Header />
      <Main />
    </AuthContext.Provider>
  );
}

function Header() {
  return (
    <AuthContext.Consumer>
      {({ auth }) => (
        <header>
          {auth.isAuthenticated ? <p>Logged In</p> : <p>Guest</p>}
        </header>
      )}
    </AuthContext.Consumer>
  );
}

function Main() {
  return (
    <AuthContext.Consumer>
      {({ auth, setAuth }) => (
        <main>
          {auth.isAuthenticated ? (
              <button onClick={() => setAuth({ isAuthenticated: false})}>Logout</button>
            ): (
              <button onClick={() => setAuth({ isAuthenticated: true})}>Login</button>
            )
          }
        </main>
      )}
    </AuthContext.Consumer>
  );
}

export default AppContextApiTask7Example1;