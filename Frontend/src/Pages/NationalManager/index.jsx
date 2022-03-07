import { useState } from "react";
import NationalManagerTable from "../../components/NationalManagerTable";
import Modal from "../../components/Modals";
const NationalManager = () => {
  const [open, setIsOpen] = useState(false);

  return (
    <div className="w-[90%] mx-auto">
      <div className="flex justify-between">
        <div className="w-[70%]">
          <div className="flex justify-between items-center w-[98%]">
            <h1 className="text-4xl font-black  py-14">
              {" "}
              Manage National Managers{" "}
            </h1>
            <button
              onClick={() => setIsOpen(!open)}
              type="button"
              className="h-12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add NationalManager
            </button>
          </div>
          <NationalManagerTable />
        </div>
        <div className="w-[30] py-14">ehe</div>
      </div>

      <Modal
        isOpen={open}
        title={"Add Urban Center"}
        setIsOpen={setIsOpen}
        // component={<AddUrbanCenterForm setIsOpen={setIsOpen} isOpen={open} />}
      />
    </div>
  );
};

export default NationalManager;
