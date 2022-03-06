import ManagerTable from "../../components/ManagerTable";
import Modal from "../../components/Modals";
import { useState } from "react";
import AddManagerForm from "../../components/Forms/AddManagerForm";
import Stats from '../../components/Statistiques/Stat'


const AdminDash = () => {
  const [open, setIsOpen] = useState(false);

  return (
    <div className="w-[100%]">
      <div className="flex justify-between items-center ">
        <h1 className="text-4xl font-black pl-12  py-14">Managers</h1>
        <button
          onClick={() => setIsOpen(!open)}
          type="button"
          className="h-12 mr-12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Managers
        </button>
      </div>
      <div className="flex">
        <div className="w-full">
        <ManagerTable />
        </div>

        <Stats 
          title={"Manager per region"}
          role={"managers"}
        />
       </div>
       <Modal
          isOpen={open}
          title="add Manager"
          setIsOpen={setIsOpen}
          component={<AddManagerForm isOpen={open} setIsOpen={setIsOpen} />}
        />
    </div>
  );
};

export default AdminDash;
