import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function Home() {
  return <h2>Welcome to Home</h2>;
}

function About() {
  return <h2>Welcome to About page</h2>;
}

function Contact() {
  return <h2>Wecome to contact page</h2>;
}

function RouterTask15Example2() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Go Home</Link></li>
            <li><Link to="/about">Go About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </Router>
  );
}


export default RouterTask15Example2;