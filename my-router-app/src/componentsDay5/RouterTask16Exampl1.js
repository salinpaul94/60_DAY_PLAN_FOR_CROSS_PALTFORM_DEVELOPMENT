import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function Home() {
  return <h2>Home 2</h2>;
}

function About() {
  return <h2>About 2</h2>;
}

function RouterTask16Example1() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home_2</Link></li>
            <li><Link to="/about">About_2</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default RouterTask16Example1;