import axios from "axios";
import CLIENT_URL from "../../config/Config";

const useFetch = async (url, info, method = "POST") => {
  var data = null;
  var error = null;

  const result = axios({
    url: CLIENT_URL + url,
    method: method,
    data: info,
  })
    .then((res) => {
      data = res.data;
      return JSON.stringify({ data, error });
    })
    .catch((err) => {
      error = err.response.data.message;
      if (err.response.status == 429) {
        error = err.response.data;
      } else if (error == null) {
        error = "Something Wrong! Please Try again.";
      }
      return JSON.stringify({ data, error });
    });

  return result;
};

export default useFetch;
