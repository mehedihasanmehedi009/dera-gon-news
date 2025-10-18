import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";

import Home from "../Pages/Home";
import CatagorysNews from "../Pages/CatagorysNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path:"/Catagory/:id",
        loader: () => fetch("/news.json"),
        element:<CatagorysNews></CatagorysNews>

      }
    ],
  },
  {
    path: "/auth",
    element: <h2>Authentication Layout</h2>,
  },
  {
    path: "/news",
    element: <h1>News Layout</h1>,
  },
  {
    path: "/*",
    element: <h2>Error404</h2>,
  },
]);

export default router;
