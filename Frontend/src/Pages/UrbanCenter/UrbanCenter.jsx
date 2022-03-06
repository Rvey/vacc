import { useState } from "react";
import AddUrbanCenterForm from "../../components/Forms/AddUrbanCenter";
import Modal from "../../components/Modals";
import UrbanCenterTable from "../../components/UrbanCenterTable";
import StatManager from "../../components/Statistiques/StatManager";
import { useQuery } from "react-query";
import axios from "axios";

const UrbanCenter = () => {
  const [open, setIsOpen] = useState(false);
  // Queries
  const query = useQuery("urbanCenter", async () => {
    const { data } = await axios.get("http://localhost:4000/api/urbanCenter");
    return data;
  });

  return (
    <div className="w-[90%] mx-auto">
      <div className="flex justify-between">
        <div className="w-[70%]">
          <div className="flex justify-between items-center w-[98%]">
            <h1 className="text-4xl font-black  py-14">
              {" "}
              Manage Urban Center{" "}
            </h1>
            <button
              onClick={() => setIsOpen(!open)}
              type="button"
              className="h-12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add UrbanCenter
            </button>
          </div>
          <UrbanCenterTable />
        </div>
        <div className="w-[30] py-14">
          <StatManager
            role={"urbanCenter"}
            StatistiqueTitle={"Vaccin per region"}
          />
        </div>
      </div>

      <Modal
        isOpen={open}
        title={"Add Urban Center"}
        setIsOpen={setIsOpen}
        component={<AddUrbanCenterForm setIsOpen={setIsOpen} isOpen={open} />}
      />
    </div>
  );
};
export default UrbanCenter;
