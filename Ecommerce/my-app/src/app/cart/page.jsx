'use client';

import {useContext} from 'react';
import {CartContext} from '../../context/CartContext';

export default function Cart() {
  const {cart, removeFromCart, updateQuantity} = useContext(CartContext);

  return (
    <div className="cart">
      <h1>Cart Items</h1>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.title} />
            <div>
              <h2>{product.title}</h2>
              <p>{product.price}</p>
              <input
                type="number"
                value={product.quantity}
                min="1"
                onChange={() => {
                  updateQuantity(product.id, Number(event.target.value));
                }}
              />
              <button onClick={() => removeFromCart(product.id)}>Remove</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
