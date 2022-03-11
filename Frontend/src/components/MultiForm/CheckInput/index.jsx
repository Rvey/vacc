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
          className="mt-1 pl-3   focus:ring-green-500 py-3 focus:border-green-500 block w-full shadow-sm sm:text-sm rounded-md border border-green-300 outline-none  "
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
            className="mt-1 pl-3  focus:ring-green-500 py-3 focus:border-green-500 block w-full shadow-sm sm:text-sm rounded-md border border-green-300 outline-none  "
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
            className="mt-1 pl-3  focus:ring-green-500 py-3 focus:border-green-500 block w-full shadow-sm sm:text-sm rounded-md border border-green-300 outline-none  "
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
            className="mt-1 pl-3  focus:ring-green-500 py-3 focus:border-green-500 block w-full shadow-sm sm:text-sm rounded-md border border-green-300 outline-none  "
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
              className="mt-1 pl-3  focus:ring-green-500 py-3 focus:border-green-500 block w-full shadow-sm sm:text-sm rounded-md border border-green-300 outline-none  "
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
              className="mt-1 pl-3  focus:ring-green-500 py-3 focus:border-green-500 block w-full shadow-sm sm:text-sm rounded-md border border-green-300 outline-none  "
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
