import { Field, Form, Formik } from "formik";
import Error from "../../Shared/Error";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { useState } from "react";
import axios from "axios";
import * as Yup from "yup";
const ManagerSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().min(2, "Too Short!").required("Required"),
});

const NationalManagerForm = () => {
  let navigate = useNavigate();
  const [error, setError] = useState("");
  const updateStatus = useMutation(() =>
    axios.post(`http://localhost:4000/api/appointments/updateNotVaccinated`)
  );

  const loginMutation = useMutation(
    (values) =>
      axios.post("http://localhost:4000/api/nationalManager/login", values),
    {
      onSuccess: async (data) => {
        sessionStorage.setItem("user", JSON.stringify(data.data));
        updateStatus.mutate();
        navigate("/patients");
      },
      onError: () => {
        setError("wrong creds");
      },
    }
  );
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={ManagerSchema}
      onSubmit={async (values) => {
        loginMutation.mutate(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="text-xl text-white font-semibold pb-5">
            National Manager login
          </div>
          {loginMutation.isError && <Error error={error} />}

          <div className="mt-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Email
            </label>
            <Field
              type="text"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="email"
            />
            {errors.email && touched.email ? (
              <div className="text-red-500 font-semibold dark:text-red-400">
                {errors.email}
              </div>
            ) : null}
          </div>
          <div className="mt-4">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Password
            </label>
            <Field
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="password"
            />
            {errors.password && touched.password ? (
              <div className="text-red-500 font-semibold dark:text-red-400">
                {errors.password}
              </div>
            ) : null}
          </div>

          <div className="mt-8 flex justify-between">
            <button
              type="submit"
              className="w-[12em] text-green-900 bg-white border border-green-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-500 dark:text-white dark:border-green-600 dark:hover:bg-green-700 dark:hover:border-gray-700 dark:focus:ring-green-800"
            >
              login
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default NationalManagerForm;
