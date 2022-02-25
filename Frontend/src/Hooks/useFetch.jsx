import { useState, useEffect } from "react";

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

export const Login = async (url, data) => {
  const response = await fetch(`http://localhost:4000/api/${url}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response;
};

export const deleteManager = (url, id) => {
  return fetch(`http://localhost:4000/api/${url}/${id}`, {
    method: "DELETE",
  });
};

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const abortCtrl = new AbortController();

    fetch(url, { signal: abortCtrl.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data from that resource");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
        setError(null);
        // console.log(data);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setLoading(false);
          setError(err.message);
        }
      });
  }, [url]);

  return { data, error, loading, isLogged };
};
