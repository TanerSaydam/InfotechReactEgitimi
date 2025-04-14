import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './pages/Layout'
import Product from './pages/Product'
import Home from './pages/Home'
import { Login } from './pages/Login'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/products",
        element: <Product />
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
