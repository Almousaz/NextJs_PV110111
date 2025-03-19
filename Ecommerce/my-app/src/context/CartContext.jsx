'use client';

import {createContext, useState} from 'react';

export const CartContext = createContext();

export default function CartProvider({children}) {
  const [cart, setCart] = useState([]);
  console.log('Cart state:', cart);

  function addToCart(product) {
    setCart((prev) => {
      const selectedProduct = prev.find((item) => item.id == product.id);

      if (!selectedProduct) {
        return [...prev, {...product, quantity: 1}];
      } else {
        return prev.map((item) =>
          item.id == product.id ? {...item, quantity: item.quantity + 1} : item
        );
      }
    });
  }

  function removeFromCart(productId) {
    setCart((prev) => prev.filter((product) => product.id != productId));
  }

  function updateQuantity(productId, newQuantity) {
    setCart((prev) =>
      prev.map((item) =>
        item.id == productId ? {...item, quantity: newQuantity} : item
      )
    );
  }

  return (
    <CartContext.Provider value={{cart, addToCart, removeFromCart , updateQuantity}}>
      {children}
    </CartContext.Provider>
  );
}
