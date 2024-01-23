import { createBrowserRouter } from "react-router-dom";

import Dashboard from "../backend/pages/dashboard/Dashboard";
// Frontend Start
import Home from "../frontend/pages/home/Home";
import HotDeals from "../frontend/pages/hot-deals/HotDeals";
import Products from "../frontend/pages/products/Products";
import SingleProduct from "../frontend/pages/single-product/SingleProduct";
import Checkout from "../frontend/pages/checkout/Checkout";
import AboutUs from "../frontend/pages/about-us/AboutUs";
import ContactUs from "../frontend/pages/contact-us/ContactUs";
import Login from "../auth/pages/login/Login";
import Register from "../auth/pages/register/Register";
import Profile from "../auth/pages/profile/Profile";
import ManageProducts from "../backend/pages/products/manage-products/ManageProducts";
import PostProducts from "../backend/pages/products/post-products/PostProducts";

const router = createBrowserRouter([
  {
    // Frontend Routes
    path: "/",
    errorElement: <div>Opss! 404</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/hot-deals",
        element: <HotDeals />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/all-category",
        element: <Products />,
      },
      {
        path: "/single-product",
        element: <SingleProduct />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    // Auth Routes
    path: "/api/auth",
    errorElement: <div>Opss! 404</div>,
    children: [
      {
        path: "/api/auth/login",
        element: <Login />,
      },
      {
        path: "/api/auth/register",
        element: <Register />,
      },
      {
        path: "/api/auth/profile",
        element: <Profile />,
      },
    ],
  },
  {
    // Backend Routes
    path: "/api/admin",
    errorElement: <div>Opss! 404</div>,
    children: [
      {
        path: "/api/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/api/admin/manage-products",
        element: <ManageProducts />,
      },
      {
        path: "/api/admin/post-products",
        element: <PostProducts />,
      },
    ],
  },
]);

export default router;
