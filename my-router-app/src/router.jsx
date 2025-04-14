import { createBrowserRouter } from "react-router";
import A from "./pages/A";
import B from "./pages/B";
import C from "./pages/C";
import App from "./App";

export const router = createBrowserRouter([
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