import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [showRemoveMessage, setShowRemoveMessage] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(product => product.id !== productId));
    setShowRemoveMessage(true);
    setTimeout(() => setShowRemoveMessage(false), 2000);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, showRemoveMessage }}>
      {children}
    </CartContext.Provider>
  );
};
