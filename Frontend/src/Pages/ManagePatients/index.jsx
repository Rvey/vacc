import { useState } from "react";
import Modal from "../../components/Modals";
import PatientTable from "../../components/Tables/PatientTable";
import MyResponsivePie from "../../components/Statistiques/Pie";
import DownloadCSV from "../../utils/DownloadCSV";

const ManagePatient = () => {
  const [open, setIsOpen] = useState(false);

  return (
    <div className="w-[90%] mx-auto">
      <div className="flex justify-between">
        <div className="">
          <div className="flex justify-between items-center w-[98%]">
            <h1 className="text-4xl font-black  py-14">Manage Patients</h1>
            <DownloadCSV/>
          </div>
          <PatientTable />
        </div>
        <div className="w-[20em] h-[40em] py-14">
          <MyResponsivePie />
        </div>
      </div>

      <Modal
        isOpen={open}
        title={"Download list"}
        setIsOpen={setIsOpen}
      />
    </div>
  );
};

export default ManagePatient;
