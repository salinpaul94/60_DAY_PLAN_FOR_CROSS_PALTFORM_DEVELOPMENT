import React, { useState } from 'react';

function ShoppingCartTask7Example2() {
  const [cart, setCart] = useState([]);

  const addItemToCart = (item) => {
    setCart((prevChar) => [...prevChar, item]);
  };

  return (
    <div>
      <ProductList addItemToCart={addItemToCart} />
      <Cart cart={cart} />
    </div>
  );
}

function ProductList({ addItemToCart }) {
  const products = ['Apple', 'Banana', 'Orange'];

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => {
          return (
            <li key={product}>
              {product}
              <button onClick={() => addItemToCart(product)}>
                Add to Cart
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Cart({ cart }) {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCartTask7Example2;