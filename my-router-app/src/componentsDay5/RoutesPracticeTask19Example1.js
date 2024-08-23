import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

function Home() {
  return <h2>Home 18</h2>
}

function About() {
  return <h2>About 18</h2>
}

function Services() {
  return <h2>Services 18</h2>
}

function Contact() {
  return <h2>Contact 18</h2>
}

function RoutesPracticeTask19Example1() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default RoutesPracticeTask19Example1;