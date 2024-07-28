import React, { useContext } from 'react';
import { CartContext } from '../Components/CartProvider';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart, removeFromCart, showRemoveMessage } = useContext(CartContext);
  const totalAmount = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <div className='w-full min-h-screen p-6 bg-gray-50'>
      <h1 className='text-4xl font-bold text-center text-gray-800 mb-6'>Your Cart</h1>
      {showRemoveMessage && (
        <div className="text-red-600 mt-3 bg-red-100 rounded-md p-3 text-center flex justify-center items-center space-x-2">
          <span>Product Removed from the cart!</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
          </svg>
        </div>
      )}
      {cart.length === 0 ? (
        <p className='text-center text-xl text-gray-600'>Your cart is empty</p>
      ) : (
        <div className='max-w-4xl mx-auto bg-white p-6 shadow-md rounded-lg'>
          <ul className='space-y-4'>
            {cart.map((product, index) => (
              <li key={index} className='flex items-center p-4 border border-gray-200 rounded-lg'>
                <img src={product.images[0]} alt={product.model} className='w-20 h-20 object-cover rounded-md' />
                <div className='flex-1 ml-4'>
                  <h2 className='text-2xl md:text-3xl font-semibold text-gray-700'>{product.model}</h2>
                  <p className='text-lg text-gray-500'>${product.price}</p>
                </div>
                <button 
                  onClick={() => removeFromCart(product.id)} 
                  className='flex items-center gap-2 mt-1 bg-zinc-700 text-white px-4 py-2 rounded-md hover:bg-zinc-500 transition'
                >
                  Remove 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='w-5 h-5'>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
          
          <div className='mt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0'>
            <div className='text-2xl font-semibold text-gray-700'>
              Total: ${totalAmount.toFixed(2)}
            </div>
            <Link to='/' className='text-pink-600 underline'>Continue Shopping</Link>
            <button className='bg-zinc-700 text-white px-6 py-3 rounded-md hover:bg-zinc-500 transition'>Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
