import axios from "axios";
import React, { useState, useEffect } from "react";

const useFetch = (url, method, info = {}) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios({
      url: url,
      method: "http://localhost:3000/" + method,
      data: JSON.stringify(info),
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("Fecthing is not successful");
        } else {
          setData(res.data);
          setIsLoading(false);
          setError(null);
        }
      })
      .catch((err) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, [url]);
  return { data, isLoading, error };
};

export default useFetch;
