import { Form, Formik, Field } from "formik";
import { useState, useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { sendData } from "../../../Hooks/useFetch";
import MailConfirm from "../../MailConfirm";

const UserForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setStep , step , checkResult } = useContext(UserContext)
  
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
        }}
        onSubmit={(values) => {
          sendData("appointments" ,values);
          setIsOpen(!isOpen)
        }}
      >
        {({
          values,
          errors,
          touched,
          /* and other goodies */
        }) => (
          <Form className=" pt-[5em] w-1/2 flex flex-col justify-between h-full">
           
              <div className="px-4 py-5  sm:p-6">
                <div className="flex flex-col gap-5">
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
                      htmlFor="street-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Center
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
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700"
                    >
                      City
                    </label>
                    <Field
                      type="text"
                      name="city"
                      id="city"
                      className="mt-1 focus:ring-green-500 py-3 focus:border-green-500 block w-full shadow-sm sm:text-sm rounded-md border border-green-300 outline-none  "
                    />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 space-x-3 mb-2 rounded-tr-md rounded-br-md shadow-md">
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
