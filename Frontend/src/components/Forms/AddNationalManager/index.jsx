import { Formik, Form, Field, ErrorMessage } from "formik";
import { useMutation, useQueryClient } from "react-query";
import { useState } from "react";
import Error from "../../Shared/Error";
import axios from "axios";
import * as Yup from "yup";
import { sendData, useFetch } from "../../../Hooks/useFetch";

const Manager = Yup.object().shape({
  firstName: Yup.string().min(2, "Too Short!").required("Required"),
  lastName: Yup.string().required("Required"),
  region: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
});

const AddNationalManagerForm = ({ setIsOpen, isOpen }) => {
  const { data } = useFetch(
    "https://calm-fjord-14795.herokuapp.com/api/regions"
  );
  const queryClient = useQueryClient();

  const addMutation = useMutation(
    (values) =>
      axios.post("http://localhost:4000/api/nationalManager/store", values),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("nationalManager");
        setIsOpen(!isOpen);
      },
    }
  );
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        region: "",
      }}
      validationSchema={Manager}
      onSubmit={(values) => {
        // sendData("managers" ,values)
        addMutation.mutate(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          {addMutation.isError && (
            <Error error="national Manager already exist" />
          )}
          <div className="mt-4">
            <label
              htmlFor="firstName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              FirstName
            </label>
            <Field
              type="text"
              id="firstName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="firstName"
            />
            {errors.firstName && touched.firstName ? (
              <div className="text-red-500 font-semibold dark:text-red-400">
                {errors.firstName}
              </div>
            ) : null}
          </div>
          <div className="mt-4">
            <label
              htmlFor="lastName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              LastName
            </label>
            <Field
              type="text"
              id="lastName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="lastName"
            />
            {errors.lastName && touched.lastName ? (
              <div className="text-red-500 font-semibold dark:text-red-400">
                {errors.lastName}
              </div>
            ) : null}
          </div>

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
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Region
            </label>
            <Field
              className="bg-gray-700 border border-gray-300 text-gray-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              as="select"
              name="region"
            >
              {data &&
                data.map((el, index) => (
                  <option key={index} value={el.region}>
                    {el.region}
                  </option>
                ))}
            </Field>
            {errors.region && touched.region ? (
              <div className="text-red-500 font-semibold dark:text-red-400">
                {errors.region}
              </div>
            ) : null}
          </div>
          <div className="mt-8 flex justify-between">
            <button
              type="submit"
              className="w-[12em] text-green-900 bg-white border border-green-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-500 dark:text-white dark:border-green-600 dark:hover:bg-green-700 dark:hover:border-gray-700 dark:focus:ring-green-800"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="w-[12em] text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
            >
              cancel
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default AddNationalManagerForm;
