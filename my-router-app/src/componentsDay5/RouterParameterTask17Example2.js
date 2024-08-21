import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function ProductPage({ match }) {
  return <h2>Product ID: {match.params.productId}</h2>;
}

function RouterParameterTask17Example2() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/product/101">Product 101</Link></li>
            <li><Link to="/product/102">Product 102</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/product/:productId" element={ProductPage} />
        </Routes>
      </div>
    </Router>
  );
}

export default RouterParameterTask17Example2;