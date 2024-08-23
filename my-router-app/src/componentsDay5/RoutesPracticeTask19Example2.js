import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";

function UserProfile() {
  const { id } = useParams();
  return <h2>User ID: {id}</h2>;
}

function RouterPracticeTask19Example2() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/user/1">User 1</Link></li>
            <li><Link to="/user/2">User 2</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/user/:id" element={UserProfile} />
        </Routes>
      </div>
    </Router>
  );
}

export default RouterPracticeTask19Example2;