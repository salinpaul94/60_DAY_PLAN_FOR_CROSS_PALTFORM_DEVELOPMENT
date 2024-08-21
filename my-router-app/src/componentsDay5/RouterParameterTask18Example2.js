import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";

function DisplayLoaction() {
  const location = useLocation();

  return <p>Current URL: {location.pathname}</p>
}

function RouterParameterTask18Example2() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <DisplayLoaction/>
        <Routes>
          <Route path="/" element={<h2>Home</h2>}/>
          <Route path="/about" element={<h2>About</h2>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default RouterParameterTask18Example2;