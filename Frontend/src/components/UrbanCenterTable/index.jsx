import { useState } from 'react'
import Modal from "../../components/Modals"
import AddUrbanCenterForm from '../Forms/AddUrbanCenter'
const UrbanCenterTable = () => {
    const [open , setIsOpen] = useState(false)
    const [data , setData] = useState([])
    const [center , setCenterId] = useState() 

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
                Center Name
              </th>
              <th
                scope="col"
                className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
              >
                Location
              </th>
              <th
                scope="col"
                className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
              >
                region
              </th>
              <th scope="col" className="relative py-3 px-6">
                <span className="sr-only">delete</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data?.map((center, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {center.centerName}
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {center.city}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                    {center.region}
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                    <div className="space-x-3">
                      <button
                        type="button"
                        onClick={() => {
                          setIsOpen(!open);
                          setCenterId(center._id);
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
        title="title"
        setIsOpen={setIsOpen}
      component={<AddUrbanCenterForm/>}
      />
    </div>
  </div>
)
}
export default UrbanCenterTable