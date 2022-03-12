import { useState } from "react";
import { useQuery } from "react-query";
import UpdateStatus from "../../Modals/UpdateStatus";
import dayjs from "dayjs";
import Modal from "../../Modals";
import axios from "axios";
import XSvg from "../../Shared/XSvg";
import { FetchData } from "../../../Hooks/useFetch";
const PatientTable = () => {
  const [open, setIsOpen] = useState(false);
  const [patientId, setPatientIdId] = useState("");

  const query = useQuery("patient", async () => {
    const { data } = await axios.get("http://localhost:4000/api/appointments");
    return data;
  });

  return (
    <div>
      <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
        <div className="overflow-hidden shadow-md sm:rounded-lg">
          <table className="min-w-full">
            <thead className="bg-gray-100">
              <tr>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase"
                >
                  FirstName
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase"
                >
                  LastName
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase"
                >
                  email
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase"
                >
                  Cin
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase"
                >
                  Phone
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase"
                >
                  vaccination
                </th>

                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400 text-center"
                >
                  update Status
                </th>
              </tr>
            </thead>
            <tbody>
              {query &&
                query.data?.map((patient, index) => (
                  <tr key={index} className="bg-white border-b ">
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                      {patient.firstName}
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                      {patient.lastName}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                      {patient.email}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                      {patient.date}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                      {patient.phone}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                      {patient.VaccNumber === "firstVacc" ? (
                        <div className="flex">
                          <XSvg />
                        </div>
                      ) : patient.VaccNumber === "secondVacc" ? (
                        <div className="flex">
                          <XSvg />
                          <XSvg />
                        </div>
                      ) : patient.VaccNumber === "thirdVacc" ? (
                        <div className="flex">
                          <XSvg />
                          <XSvg />
                          <XSvg />
                        </div>
                      ) : patient.VaccNumber === "notVaccinated" ? (
                        "Not Vaccinated"
                      ) : (
                        "fully Vaccinated"
                      )}
                    </td>

                    <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                      <div className="space-x-3">
                        {patient.patientStatus == "notVaccinated" ? (
                          <button
                            type="button"
                            disabled
                            className=" py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 rounded-lg border border-gray-200 bg-gray-100"
                          >
                            not Vaccinated
                          </button>
                        ) : patient.patientStatus === "Vaccinated" ? (
                          <button
                            type="button"
                            disabled
                            className=" py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 rounded-lg border border-gray-200 bg-gray-100"
                          >
                            Vaccinated
                          </button>
                        ) : patient.VaccNumber === "firstVacc" ||
                          "secondVacc" ||
                          "thirdVacc" ? (
                          <button
                            type="button"
                            onClick={() => {
                              setIsOpen(!open);
                              setPatientIdId(patient._id);
                            }}
                            className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                          >
                            update status
                          </button>
                        ) : null}
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <Modal
          isOpen={open}
          setIsOpen={setIsOpen}
          component={
            <UpdateStatus
              isOpen={open}
              setIsOpen={setIsOpen}
              patientId={patientId}
            />
          }
        />
      </div>
    </div>
  );
};
export default PatientTable;
