import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";

import Home from "../Pages/Home";
import CatagorysNews from "../Pages/CatagorysNews";
import LogIn from "../Pages/LogIn";
import Registar from "../Pages/Registar";
import AuthLayout from "../Layout/AythLayout";
import Newsdetails from "../Pages/Newsdetails";

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
    element:<AuthLayout></AuthLayout> ,
    children:[
    {
      path:"/auth/Login",
      element:<LogIn></LogIn>
    },
    {
      path:"/auth/Registar",
      element:<Registar></Registar>
    }
    ]
  },
  {
    path: "/news-details",
    element:<Newsdetails></Newsdetails>
  },
  {
    path: "/*",
    element: <h2>Error404</h2>,
  },
]);

export default router;
