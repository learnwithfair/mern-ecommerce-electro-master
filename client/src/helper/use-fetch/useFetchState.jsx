import axios from "axios";
import React, { useState, useEffect } from "react";
import CLIENT_URL from "../../config/Config";

const useFetchState = (url, info = {}, method = "get") => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios({
      url: CLIENT_URL + url,
      method: method,
      data: info,
      withCredentials: true,
    })
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        const errmgs = err.hasOwnProperty("response")
          ? err.response.data
          : err.hasOwnProperty("message")
          ? err.message
          : "Some Wrong. Please try again!";
        setError(errmgs);
        setData(null);
        setIsLoading(false);
      });
  }, [url + info]);
  return { data, isLoading, error };
};

export default useFetchState;
