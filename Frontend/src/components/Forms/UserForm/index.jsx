import { Form, Formik, Field } from "formik";
import { useState } from "react";
import MailConfirm from "../../MailConfirm";
const UserForm = ({ step, setStep }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h1>Personal Info</h1>
      <Formik
        initialValues={{
          lastName: "",
          firstName: "",
          address: "",
          phone: "",
          Cin: "",
          email: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          /* and other goodies */
        }) => (
          <Form className="mt-5 md:mt-0 w-1/2 h-full">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
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
                      autoComplete="given-name"
                      className="mt-1 focus:ring-indigo-500 py-3 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
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
                      autoComplete="family-name"
                      className="mt-1 focus:ring-indigo-500 py-3 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <Field
                      type="text"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="mt-1 focus:ring-indigo-500 py-3 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6">
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
                      autoComplete="phone"
                      className="mt-1 focus:ring-indigo-500 py-3 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="street-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Street address
                    </label>
                    <Field
                      type="text"
                      name="address"
                      id="address"
                      autoComplete="address"
                      className="mt-1 focus:ring-indigo-500 py-3 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
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
                      autoComplete="postal-code"
                      className="mt-1 focus:ring-indigo-500 py-3 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
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
                      autoComplete="address-level2"
                      className="mt-1 focus:ring-indigo-500 py-3 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 space-x-3">
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-400 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Prev
                </button>
                <button
                  type="submit"
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <MailConfirm setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  );
};
export default UserForm;
