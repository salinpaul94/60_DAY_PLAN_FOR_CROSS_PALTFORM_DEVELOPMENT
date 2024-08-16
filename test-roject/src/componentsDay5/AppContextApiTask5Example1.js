import React, { createContext, useState } from 'react';

const AuthContext = createContext();

function AppContextApiTask6Example1() {
  const [auth, setAuth] = useState({ isAuthenticated: false });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <Login />
    </AuthContext.Provider>
  );
}

function Login() {
  return (
    <AuthContext.Consumer>
      {({ auth, setAuth }) => (
        <div>
          {auth.isAuthenticated ? (
            <div>
              <p>Welcome back!</p>
              <button onClick={() => setAuth({ isAuthenticated: false})}>
                Logout
              </button>  
            </div>
          ) : (
            <button onClick={() => setAuth({ isAuthenticated: true})}>
              Login
            </button>
          )}
        </div>
      )}
    </AuthContext.Consumer>
  );
}

export default AppContextApiTask6Example1;