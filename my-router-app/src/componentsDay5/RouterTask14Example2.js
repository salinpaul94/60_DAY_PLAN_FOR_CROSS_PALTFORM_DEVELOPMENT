import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";

function Dashboard() {
  return <h2>Dashboard</h2>;
}

function Login() {
  return <h2>Login</h2>;
}

function RouterTask14Example2() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/" onClick={() => setIsAuthenticated(false)}>Login</Link></li>
            <li><Link to="/dashboard" onClick={() => setIsAuthenticated(true)}>Dashboard</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard/> : <Navigate to="/"/>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default RouterTask14Example2;