import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import OrderReviw from './components/orderReview/OrderReviw';
import Inventory from './components/inventory/Inventory';
import Login from './components/Login/Login';
import Home from './components/layout/Home';
import Shop from './Shop';
import loadCartProducts from './loader/loadCartProducts';


const router = createBrowserRouter([
  {
    path : '/',
    element :  <Home/>,
    children : [
      {
        path : '/',
        element : <Shop/>
      },
      {
        path : 'orderreview',
        element : <OrderReviw/>,
        loader : loadCartProducts
      },
      {
        path : 'inventory',
        element : <Inventory/>
      },
      {
        path : 'login',
        element : <Login/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
