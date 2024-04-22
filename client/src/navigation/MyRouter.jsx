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
import ForgotPassword from "../auth/pages/forgot-password/ForgotPassword";
import ResetPassword from "../auth/pages/reset-password/ResetPassword";
import UserVerify from "../auth/pages/user-verify/UserVerify";
import Admin from "../backend/pages/admin/Admin";
import ErrorPage404 from "../error-pages/404";
import IsAdminLoggedIn from "./IsAdminLoggedIn";
import IsLoggedOut from "./IsLoggedOut";
import IsUserLoggedIn from "./IsUserLoggedIn";
import Logo from "../backend/pages/logo/Logo";

const router = createBrowserRouter([
  {
    // Frontend Routes
    path: "/",
    errorElement: <ErrorPage404 />,
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
        path: "/single-product/:productSlug",
        element: <SingleProduct />,
      },
      {
        path: "/checkout",
        element: <IsUserLoggedIn component={<Checkout />} />,
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
        element: <IsUserLoggedIn component={<Profile />} />,
      },
    ],
  },
  {
    // Auth Routes
    path: "/api/auth",
    errorElement: <ErrorPage404 />,
    children: [
      {
        path: "/api/auth/login",
        element: <IsLoggedOut component={<Login />} />,
      },
      {
        path: "/api/auth/register",
        element: <IsLoggedOut component={<Register />} />,
      },
      {
        path: "/api/auth/verify",
        element: <IsLoggedOut component={<UserVerify />} />,
      },
      {
        path: "/api/auth/forgot-password",
        element: <IsLoggedOut component={<ForgotPassword />} />,
      },
      {
        path: "/api/auth/reset-password",
        element: <IsLoggedOut component={<ResetPassword />} />,
      },
    ],
  },
  {
    // Backend Routes
    path: "/api/admin",
    errorElement: <ErrorPage404 />,
    children: [
      {
        path: "/api/admin/dashboard",
        element: <IsAdminLoggedIn component={<Dashboard />} />,
      },
      {
        path: "/api/admin/admin-list",
        element: <IsAdminLoggedIn component={<Admin />} />,
      },
      {
        path: "/api/admin/logo",
        element: <IsAdminLoggedIn component={<Logo />} />,
      },
      {
        path: "/api/admin/manage-products",
        element: <IsAdminLoggedIn component={<ManageProducts />} />,
      },
      {
        path: "/api/admin/post-products",
        element: <IsAdminLoggedIn component={<PostProducts />} />,
      },
    ],
  },
]);

export default router;
