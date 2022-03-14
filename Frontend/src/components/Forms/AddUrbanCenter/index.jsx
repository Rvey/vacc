import { Formik, Form, Field, useFormikContext } from "formik";
import * as Yup from "yup";
import { useFetch } from "../../../Hooks/useFetch";
import { MutateData } from "../../../Hooks/query";

const Urban = Yup.object().shape({
  urbanCenter: Yup.string().min(2, "Too Short!").required("Required"),
  region: Yup.string().required("Required"),
  location: Yup.string().required("Required"),
});

const UrbanCenter = ({ data, region }) => {
  let regionId = [];
  regionId = data?.filter((el) => el.region === region)[0].id;
  const { data: city } = useFetch(
    `https://calm-fjord-14795.herokuapp.com/api/villes/${regionId}`
  );

  return (
    <Field
      className="bg-gray-700 border border-gray-300 text-gray-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      as="select"
      name="location"
    >
      <option value="">Select a city</option>
      {city &&
        city?.map((el, index) => (
          <option key={index} value={el.ville}>
            {el.ville}
          </option>
        ))}
    </Field>
  );
};

const AddUrbanCenterForm = ({ setIsOpen, isOpen }) => {
  const { data, loading } = useFetch(
    "https://calm-fjord-14795.herokuapp.com/api/regions"
  );

  const { addMutation } = MutateData("urbanCenter", setIsOpen, isOpen);
  return (
    <Formik
      initialValues={{
        urbanCenter: "",
        region: "",
        location: "",
      }}
      validationSchema={Urban}
      onSubmit={(values) => {
        addMutation.mutate(values, {
          onSuccess: () => {
            setIsOpen(!isOpen);
          },
        });
      }}
    >
      {({ errors, touched, values }) => (
        <Form>
          <div className="mt-4">
            <label
              htmlFor="urbanCenter"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              UrbanCenter
            </label>
            <Field
              type="text"
              id="urbanCenter"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="urbanCenter"
            />
            {errors.urbanCenter && touched.urbanCenter ? (
              <div className="text-red-500 font-semibold dark:text-red-400">
                {errors.urbanCenter}
              </div>
            ) : null}
          </div>

          <div className="mt-4">
            <label
              htmlFor="region"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Region
            </label>
            {loading && (
              <div className="text-blue-400 font-normal py-3">
                Fetching regions...
              </div>
            )}
            <Field
              className="bg-gray-700 border border-gray-300 text-gray-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              as="select"
              name="region"
            >
              <option value="" disabled>
                Select region
              </option>
              {data &&
                data.map((el, index) => (
                  <option key={index} value={el.region}>
                    {el.id} - {el.region}
                  </option>
                ))}
            </Field>
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
              City / urban
            </label>
            {data && values.region && (
              <UrbanCenter data={data} region={values.region} />
            )}
            {errors.location && touched.location ? (
              <div className="text-red-500 font-semibold dark:text-red-400">
                {errors.location}
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
export default AddUrbanCenterForm;
