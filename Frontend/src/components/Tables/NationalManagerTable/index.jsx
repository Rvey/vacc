import { useState } from "react";
import ConfirmDelete from "../../Modals/ConfirmDelete";
import Modal from "../../Modals";

import { FetchData } from "../../../Hooks/query";
const NationalManagerTable = () => {
  const [open, setIsOpen] = useState(false);
  const [NManagerId, setNManagerId] = useState("");

  const { query } = FetchData("nationalManager");

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
                <th scope="col" className="relative py-3 px-6">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {query &&
                query.data?.map((nationalManager, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {nationalManager.firstName}
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {nationalManager.lastName}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      {nationalManager.email}
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                      <div className="space-x-3">
                        <button
                          type="button"
                          onClick={() => {
                            setIsOpen(!open);
                            setNManagerId(nationalManager._id);
                          }}
                          className=" text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-800"
                        >
                          delete
                        </button>
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
            <ConfirmDelete
              isOpen={open}
              setIsOpen={setIsOpen}
              managerId={NManagerId}
              user="nationalManager"
            />
          }
        />
      </div>
    </div>
  );
};
export default NationalManagerTable;
