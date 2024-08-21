import React from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Navigation() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/')}>Go to Home</button>
      <button onClick={() => navigate('/about')}>Go to About</button>
    </div>
  );
}

function UseNavigateTask18Example1() {
  return (
    <Router>
      <div>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default UseNavigateTask18Example1;