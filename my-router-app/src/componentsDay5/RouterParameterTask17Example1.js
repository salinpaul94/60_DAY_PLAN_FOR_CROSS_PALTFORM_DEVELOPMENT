import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function UserProfile({ match }) {
  return <h2>User ID: {match.params.id}</h2>;
}

function RouterTask17Example1() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/user/1">User 1</Link></li>
            <li><Link to="/user/2">User 2</Link></li>
          </ul>
          <Routes>
            <Route path="/user/:id" element={UserProfile} />
          </Routes>
        </nav>
      </div>
    </Router>
  );
}

export default RouterTask17Example1;