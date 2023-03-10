import { useState } from "react";
import { useNavigate } from "react-router-dom";
const useHTTP = (requestConfig) => {
  const [isLoading, setIsLoading] = useState(false);
  const [resError, setResError] = useState(false);
  const [errorMarkup, setErrorMarkup] = useState();
  const navigate = useNavigate();

  const sendRequest = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(requestConfig.url, {
        method: requestConfig.method,
        headers: requestConfig.headers,
        body: JSON.stringify(requestConfig.body),
        credentials: "include",
      });
      const data = await res.json();
      console.log(res);
      console.log(data);
      if (!res.ok) {
        setIsLoading(false);
        throw new Error(data.error);
      }
      console.log(data);
      console.log(res);
      setIsLoading(false);
      navigate(requestConfig.navTo);
    } catch (err) {
      console.log(err.message);
      setResError(true);
      setErrorMarkup(err.message);
      setIsLoading(false);
    }
  };
  return {
    sendRequest,
    isLoading,
    resError,
    errorMarkup,
  };
};

export default useHTTP;
