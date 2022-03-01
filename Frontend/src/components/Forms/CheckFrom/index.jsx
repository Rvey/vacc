import { Form, Formik, Field } from "formik";
import CheckInput from "../../CheckInput";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";

const CheckForm = () => {
 
  const { setStep , step , setCheckResult } = useContext(UserContext)

  return (
    
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
          <Form className=" pt-[5em] w-1/2 flex flex-col justify-between h-full">
              <div className="px-4 py-5 sm:p-6">
            <div className="text-2xl font-bold pb-8">Condition check</div>
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
                      className="mt-1 pl-5 focus:ring-green-500 py-3 focus:border-green-500 block w-full shadow-sm sm:text-sm rounded-md border border-green-300 outline-none  "
                    />
                  </div>

                  {values.age > 12 && <CheckInput values={values} />}
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 space-x-3 mb-2 rounded-tr-md rounded-br-md shadow-md">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Next
                </button>
              </div>
          </Form>
        )}
      </Formik>
    
  );
};
export default CheckForm;
