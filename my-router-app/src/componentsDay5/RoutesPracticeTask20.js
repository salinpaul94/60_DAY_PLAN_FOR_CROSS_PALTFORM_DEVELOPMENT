import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";

function Home() {
  return <h2>Home 20</h2>;
}

function About() {
  return <h2>About 20</h2>;
}

function Product() {
  const { id } = useParams();
  return <h2>Product ID: { id}</h2>;
}

function RoutesPracticeTask20() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/product/101">Product 101</Link></li>
            <li><Link to="/product/102">Product 102</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/product/:id" element={<Product/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default RoutesPracticeTask20;
