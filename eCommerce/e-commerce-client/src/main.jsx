import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Layout from './pages/Layout';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Payment from './pages/Payment';
import "./index.css";
import Order from './pages/Order';
import Product from './pages/Product';
import Profile from './pages/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/carts",
        element: <Cart/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/payment",
        element: <Payment/>,
      },
      {
        path: "/orders",
        element: <Order />
      },
      {
        path: "/products",
        element: <Product />
      },
      {
        path: "/products/:categoryId",
        element: <Product />
      },
      {
        path: "/my-profile",
        element: <Profile />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
