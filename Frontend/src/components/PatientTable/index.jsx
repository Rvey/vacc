import { useState } from "react";
import { useQuery } from "react-query";
import UpdateStatus from "../UpdateStatus";
import dayjs from "dayjs";
import Modal from "../Modals";
import axios from "axios";
import XSvg from "../Shared/XSvg";
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
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  FirstName
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  LastName
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  email
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  Cin
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  Phone
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
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
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {patient.firstName}
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {patient.lastName}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      {patient.email}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      {patient.date}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      {patient.phone}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
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
                      ) : null}
                    </td>

                    <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                      <div className="space-x-3">
                        {(dayjs(patient.date).format("YYYY-MM-DD") >
                          dayjs().format("YYYY-MM-DD") &&
                          patient.patientStatus !== "Vaccinated") 
                     ? (
                          <button
                            type="button"
                            onClick={() => {
                              setIsOpen(!open);
                              setPatientIdId(patient._id);
                            }}
                            className=" text-white hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                          >
                            update status
                          </button>
                        ) : (
                          <button
                            type="button"
                            disabled
                            className=" text-white bg-slate-700 rounded-lg text-sm px-5 py-2.5 text-center"
                          >
                            Vaccinated
                          </button>
                        )}
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
