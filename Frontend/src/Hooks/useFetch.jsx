import { useState , useEffect } from "react";

export const sendData = async (url, data) => {
  const response = await fetch(`http://localhost:4000/api/${url}/store`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
};

export const Login = async (url , data) => {
  const response = await fetch(`http://localhost:4000/api/${url}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response
}

export const useFetch = (url, data) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, data);
        setResponse(res);
        setIsLogged(true);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [url, data]);

  return { response, error, loading, isLogged };
};

