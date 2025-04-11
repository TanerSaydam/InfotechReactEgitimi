import { createRoot } from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router'
import A from './pages/A'
import B from './pages/B'
import C from './pages/C'

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/a",
        element: <A />
      },
      {
        path: "/b",
        element: <B />
      },
      {
        path: "/c",
        element: <C />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)