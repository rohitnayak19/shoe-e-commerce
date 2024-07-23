
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Pages/Home.jsx';
import Cart from './Pages/CartPage.jsx';
import ProductDetail from './Pages/ProductDetail.jsx';
import Layout from './Components/Layout.jsx';
import About from './Components/About.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CartProvider } from './Components/CartProvider.jsx';
import Products from './ProductsData/Products.json';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout products={Products}/>,
    children: [
      {
        path: '/',
        element: <Home products={Products} />,
      },
      {
        path: '/productdetail/:productId',
        element: <ProductDetail products={Products} />,
      },
      {
        path: '/CartPage',
        element: <Cart products={Products} />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);
