import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function Home() {
  return <h2>Home3</h2>;
}

function Services() {
  return <h3>Services3</h3>;
}

function Contact() {
  return <h4>Contact3</h4>;
}

function RouterTask16Example2() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home--3</Link></li>
            <li><Link to="/services">About--3</Link></li>
            <li><Link to="/contact">Contact--3</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default RouterTask16Example2;