import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Product from './Pages/Product';
import ProductList from './Pages/ProductList';

  const rout = createBrowserRouter([
    {
      path:"/",
      element:<Product/>
    },
    {
      path:"/product/:id",
      element:<ProductList/>
    }
  ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <RouterProvider router={rout}/>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
