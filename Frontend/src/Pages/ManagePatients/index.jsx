import { useState } from "react";
import Modal from "../../components/Modals";
import PatientTable from "../../components/PatientTable";
const ManagePatient = () => {
  const [open, setIsOpen] = useState(false);

  return (
    <div className="w-[90%] mx-auto">
      <div className="flex justify-between">
        <div className="">
          <div className="flex justify-between items-center w-[98%]">
            <h1 className="text-4xl font-black  py-14"> Manage Patients </h1>
            <button
              onClick={() => setIsOpen(!open)}
              type="button"
              className="h-12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Download list
            </button>
          </div>
          <PatientTable />
        </div>
        <div className="w-[30%] py-14">ehe</div>
      </div>

      <Modal
        isOpen={open}
        title={"Download list"}
        setIsOpen={setIsOpen}
        // component={<AddNationalManagerForm setIsOpen={setIsOpen} isOpen={open} />}
      />
    </div>
  );
};

export default ManagePatient;
