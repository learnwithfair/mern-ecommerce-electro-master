import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import CLIENT_URL from "../config/Config";

export default function IsAdminLoggedIn(props) {
  const navigate = useNavigate(); // For Redirect Route
  const [varified, setVerified] = useState(false);

  // Set Last Path  Name for automatically redirect after login
  localStorage.setItem("lastPathname", location.pathname);

  useEffect(() => {
    axios
      .get(CLIENT_URL + "api/auth/admin-login-verify", {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.success) {
          setVerified(true);
        }
      })
      .catch((err) => {
        // Redirect to Login Page
        navigate("/api/auth/login");
      });
  }, []);

  // If loggedin then return desired component else redirect to login page.
  return varified ? props.component : () => navigate("/api/auth/login");
}
