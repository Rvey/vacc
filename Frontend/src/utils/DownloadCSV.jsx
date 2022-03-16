import React from "react";
import { usePapaParse, useCSVDownloader } from "react-papaparse";
import { useQuery } from "react-query";
import axios from "axios";
const DownloadCSV = () => {
  const { CSVDownloader, Type } = useCSVDownloader();
  const query = useQuery("patient", async () => {
    const { data } = await axios.get("http://localhost:4000/api/appointments");
    return data;
  });

  return (
    <div>
      <label className="flex bg-navy-400 hover:bg-ehe-600 p-3 text-white cursor-pointer justify-center items-center rounded-md  tracking-wide ease-linear transition-all duration-150">
        <CSVDownloader
          type={Type.Button}
          bom={true}
          config={{
            delimiter: ";",
          }}
          data={query.data?.filter((el) => el.patientStatus == "notVaccinated")}
          filename={"tableData"}
        >
          <button className="h-12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Download full list
          </button>
        </CSVDownloader>
      </label>
    </div>
  );
};

export default DownloadCSV;
