import { Form, Formik, Field } from "formik";
import CheckInput from "../../CheckInput";
import { useState, useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";

const CheckForm = () => {
 
  const { setStep , step , setCheckResult } = useContext(UserContext)

  return (
    <div>
      <Formik
        initialValues={{
          age: 0,
          VaccNumber: "",
          chronicDisease: "",
          SideEffectDesc: "",
        }}
        onSubmit={(values) => {
          setCheckResult(values);
          setStep(step + 1);
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
                <div className="flex flex-col gap-5">
                  {/* age  */}
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Enter Age
                    </label>
                    <Field
                      type="number"
                      name="age"
                      className="mt-1 focus:ring-indigo-500 py-3 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  {values.age > 12 && <CheckInput values={values} />}
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Next
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default CheckForm;
