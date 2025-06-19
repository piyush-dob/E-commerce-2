import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import AllProducts from "../pages/allproducts/AllProducts";
import Cart from "../pages/cart/Cart";
import EditProfile from "../pages/editProfile/EditProfile";

export let myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/allproducts",
        element: <AllProducts />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path:"/edit/:id",
        element:<EditProfile/>
      }
    ],
  },
]);
