import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useQueryClient, useMutation } from "react-query";
import axios from "axios";

export const useFetch = (url, setIsOpen, isOpen) => {
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

// mutate data

export const MutateData = (user, setIsOpen, isOpen) => {
  const queryClient = useQueryClient();

  const addMutation = useMutation(
    (values) => axios.post(`http://localhost:4000/api/${user}/store`, values),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(user);
        setIsOpen(!isOpen);
      },
    }
  );

  return { addMutation };
};

export const LoginMutation = (user) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const updateStatus = useMutation(() =>
    axios.post(`http://localhost:4000/api/appointments/updateNotVaccinated`)
  );

  const loginMutation = useMutation(
    (values) => axios.post(`http://localhost:4000/api/${user}/login`, values),
    {
      onSuccess: async (data) => {
        sessionStorage.setItem("user", JSON.stringify(data.data));
        // navigate("/patients");
      },
      onError: () => {
        setError("wrong creds");
      },
    }
  );
  return { loginMutation, error };
};

export const FetchData = (user) => {
  const query = useQuery(`${user}`, async () => {
    const { data } = await axios.get(`http://localhost:4000/api/${user}`);
    return data;
  });
  return { query };
};
