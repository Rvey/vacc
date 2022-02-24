import { Field } from "formik";
const CheckInput = ({ values }) => {
  return (
    <>
      {/* vaccinate type  */}
      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor="country"
          className="block text-sm font-medium text-gray-700"
        >
          Vaccinate
        </label>
        <Field
          name="VaccNumber"
          as="select"
          id="VaccNumber"
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">Select Vaccine</option>
          <option value="firstVacc">First Vaccine</option>
          <option value="secondVacc">Second Vaccine</option>
          <option value="thirdVacc">Third Vaccine</option>
        </Field>
      </div>

      {/* disease check  */}
      {values.VaccNumber === "firstVacc" ? (
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700"
          >
            you have any chronic disease ?
          </label>
          <Field
            name="chronicDisease"
            as="select"
            id="chronicDisease"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select</option>
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </Field>
        </div>
      ) : values.VaccNumber === "secondVacc" ? (
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700"
          >
            you have any side effect from the first vaccine ?
          </label>
          <Field
            name="chronicDisease"
            as="select"
            id="effected"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select</option>
            <option value="noSideEffect">No</option>
            <option value="sideEffect">Yes</option>
          </Field>
        </div>
      ) : values.VaccNumber === "thirdVacc" ? (
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700"
          >
            you have any side effect from the second vaccine ?
          </label>
          <Field
            name="chronicDisease"
            as="select"
            id="chronicDisease"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select</option>
            <option value="noSideEffect">No</option>
            <option value="sideEffect2">Yes</option>
          </Field>
        </div>
      ) : null}

      {/* side effect first vaccine desc  */}
      {values.chronicDisease === "sideEffect" &&
        values.VaccNumber === "secondVacc" && (
          <div className="mb-3">
            <Field
              name="SideEffectDesc"
              as="textarea"
              placeholder="describe your side Effect from previous vaccine "
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
            />
          </div>
        )}

      {/* side effect second vaccine desc */}
      {values.chronicDisease === "sideEffect2" &&
        values.VaccNumber === "thirdVacc" && (
          <div className="mb-3">
            <Field
              name="SideEffectDesc"
              as="textarea"
              placeholder="describe your side Effect from second vaccine "
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
            />
          </div>
        )}

      {/* treatment */}
      {values.chronicDisease === "yes" && values.VaccNumber === "firstVacc" && (
        <h1> find you treatment here google.com</h1>
      )}
    </>
  );
};
export default CheckInput;
