import { Form, Formik, Field, useFormikContext } from "formik";
import { useState, useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import MailConfirm from "../../MailConfirm";
import { useFetch } from "../../../Hooks/useFetch";
import { MutateData } from "../../../Hooks/query";
import * as Yup from "yup";

import Error from "../../Shared/Error";

const Patients = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  lastName: Yup.string().required("Required"),
  firstName: Yup.string().required("Required"),
  phone: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  Cin: Yup.string().required("Required"),
  region: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
});

const City = ({ data, region }) => {
  let regionId = [];
  regionId = data?.filter((el) => el.region === region)[0].id;

  const { data: city } = useFetch(
    `https://calm-fjord-14795.herokuapp.com/api/villes/${regionId}`
  );

  return (
    <Field
      className="mt-1 focus:ring-green-500 py-3 focus:border-green-500 block w-full shadow-sm sm:text-sm rounded-md border border-green-300 outline-none"
      as="select"
      name="city"
    >
      <option value="" disabled>
        Select a city
      </option>
      {city &&
        city?.map((el, index) => (
          <option key={index} value={el.ville}>
            {el.ville}
          </option>
        ))}
    </Field>
  );
};

const UserForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { setStep, step, checkResult } = useContext(UserContext);

  const { data, loading } = useFetch(
    "https://calm-fjord-14795.herokuapp.com/api/regions"
  );
  const { data: center, loading: isLoading } = useFetch(
    "http://localhost:4000/api/urbanCenter"
  );

  const { addMutation } = MutateData("appointments", setIsOpen, isOpen);

  return (
    <>
      <Formik
        initialValues={{
          lastName: "",
          firstName: "",
          address: "",
          phone: "",
          Cin: "",
          email: "",
          age: checkResult.age,
          VaccNumber: checkResult.VaccNumber,
          chronicDisease: checkResult.chronicDisease,
          SideEffectDesc: checkResult.SideEffectDesc,
          region: "",
          city: "",
          center: "",
        }}
        validationSchema={Patients}
        onSubmit={async (values) => {
          addMutation.mutate(values);
        }}
      >
        {({ values, errors, touched, handleChange }) => (
          <Form className=" w-1/2 flex flex-col justify-between h-full">
            <div className="px-1 py-5 sm:p-6">
              <div className="flex justify-between items-center">
                <div className="font-bold text-2xl pb-2 text-gray-800 ">
                  Personal Info
                </div>

                {addMutation.isError && <Error error={"user already exist"} />}
              </div>
              <div className="flex flex-col gap-2">
                <div className="">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <Field
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="mt-1 focus:ring-green-500 py-3 focus:border-green-500 block w-full shadow-sm sm:text-sm rounded-md border border-green-300 outline-none  "
                  />
                </div>

                <div className="">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <Field
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="mt-1 focus:ring-green-500 py-3 focus:border-green-500 block w-full shadow-sm sm:text-sm rounded-md border border-green-300 outline-none  "
                  />
                </div>

                <div className="">
                  <label
                    htmlFor="email-address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 focus:ring-green-500 py-3 focus:border-green-500 block w-full shadow-sm sm:text-sm rounded-md border border-green-300 outline-none  "
                  />
                </div>

                <div className="">
                  <label
                    htmlFor="street-address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <Field
                    type="text"
                    name="phone"
                    id="phone"
                    className="mt-1 focus:ring-green-500 py-3 focus:border-green-500 block w-full shadow-sm sm:text-sm rounded-md border border-green-300 outline-none  "
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address
                  </label>
                  <Field
                    type="text"
                    name="address"
                    id="address"
                    className="mt-1 focus:ring-green-500 py-3 focus:border-green-500 block w-full shadow-sm sm:text-sm rounded-md border border-green-300 outline-none  "
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="postal-code"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Cin
                  </label>
                  <Field
                    type="text"
                    name="Cin"
                    id="Cin"
                    className="mt-1 focus:ring-green-500 py-3 focus:border-green-500 block w-full shadow-sm sm:text-sm rounded-md border border-green-300 outline-none  "
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="region"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Region
                  </label>
                  {loading && (
                    <div className="text-blue-400 font-normal py-3">
                      Fetching regions...
                    </div>
                  )}
                  <Field
                    className="mt-1 focus:ring-green-500 py-3 focus:border-green-500 block w-full shadow-sm sm:text-sm rounded-md border border-green-300 outline-none select"
                    as="select"
                    name="region"
                  >
                    <option value="" disabled>
                      Select region
                    </option>
                    {data &&
                      data.map((el, index) => (
                        <option key={index} value={el.region} id={el.region}>
                          {el.region}
                        </option>
                      ))}
                  </Field>
                  {errors.email && touched.email ? (
                    <div className="text-red-500 font-semibold dark:text-red-400">
                      {errors.email}
                    </div>
                  ) : null}
                </div>
                <div className="">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    City
                  </label>
                  {data && values.region && (
                    <City data={data} region={values.region} />
                  )}
                  {errors.location && touched.location ? (
                    <div className="text-red-500 font-semibold dark:text-red-400">
                      {errors.location}
                    </div>
                  ) : null}
                </div>
                <div className="">
                  <label
                    htmlFor="region"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Center
                  </label>
                  <Field
                    className="mt-1 focus:ring-green-500 py-3 focus:border-green-500 block w-full shadow-sm sm:text-sm rounded-md border border-green-300 outline-none "
                    as="select"
                    name="center"
                  >
                    <option value="" disabled>
                      Select center
                    </option>
                    {center &&
                      center
                        .filter((el) => el.region == values.region)
                        .map((el, index) => (
                          <option key={index} value={el.location}>
                            {el.urbanCenter} - {el.location}
                          </option>
                        ))}
                  </Field>
                  {errors.center && touched.center ? (
                    <div className="text-red-500 font-semibold dark:text-red-400">
                      {errors.center}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="px-5"></div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 space-x-3 mb-2 rounded-tr-md rounded-br-md shadow-md ">
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-400 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Prev
              </button>
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <MailConfirm setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  );
};
export default UserForm;
