import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import CLIENT_URL from "../config/Config";

export default function IsLoggedOut(props) {
  const navigate = useNavigate(); // For Redirect Route
  const [varified, setVerified] = useState(false);

  useEffect(() => {
    axios
      .get(CLIENT_URL + "api/auth/logout-verify", {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.success) {
          setVerified(true);
        }
      })
      .catch((err) => {
        // Redirect to Login Page
        navigate("/profile");
      });
  }, []);

  // If loggedout then return desired component else redirect to Profile page.
  return varified
    ? props.component
    : () => {
        navigate("/profile");
      };
}
