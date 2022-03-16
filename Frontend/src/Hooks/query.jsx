import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useQueryClient, useMutation } from "react-query";
import { useCookies } from "react-cookie";
import axios from "axios";

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

export const LoginMutation = (user, url) => {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies();
  const [error, setError] = useState("");
  const updateStatus = useMutation(() =>
    axios.post(`http://localhost:4000/api/appointments/updateNotVaccinated`)
  );

  const loginMutation = useMutation(
    (values) => axios.post(`http://localhost:4000/api/${user}/login`, values),
    {
      onSuccess: async (data) => {
        setCookie("user", data.data);
          
        navigate(`/${url}`);
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
