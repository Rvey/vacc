import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    // eslint-disable-next-line no-restricted-globals
    .then((data) => console.log(data))
    .catch((err) => console.log(err.message));

  // return response;
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

  const fetchData = () => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  const refetch = () => {
    fetchData();
  };

  return { data, error, loading, refetch };
};
