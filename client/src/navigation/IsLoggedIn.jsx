import React, { useEffect, useState } from "react";
import Home from "../frontend/pages/home/Home";
import { useNavigate } from "react-router-dom";
// import useFetchState from "../helper/use-fetch/useFetchState";
// import useFetch from "../helper/use-fetch/useFetch";
import axios from "axios";
import CLIENT_URL from "../config/Config";
let varified = false;
export default function IsLoggedIn(props) {
  const navigate = useNavigate(); // For Redirect Route
  // const { data, error } = useFetchState("api/auth/admin-login-verify");
  const [varified, setVerified] = useState(false);
  localStorage.setItem("lastPathname", location.pathname);
  useEffect(() => {
    axios
      .get(CLIENT_URL + "api/auth/admin-login-verify", {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.success) {
          // varified = true;
          setVerified(true);
        }
      })
      .catch((err) => {
        // Get Last Path  Name for automatically redirect after login

        // Redirect to Login Page
        // useEffect(() => navigate("/"), []);
        navigate("/api/auth/login");
      });
  }, []);

  return varified ? props.component : navigate("/api/auth/login");
}
