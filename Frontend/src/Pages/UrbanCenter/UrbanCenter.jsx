import { useState } from "react"
import AddUrbanCenterForm from "../../components/Forms/AddUrbanCenter"
import Modal from "../../components/Modals"
import UrbanCenterTable from "../../components/UrbanCenterTable"
const UrbanCenter = () => {
    const [open , setIsOpen]  = useState(false)
return (
    <div className="w-[90%] mx-auto">
    <div className="flex justify-between items-center">
      <h1 className="text-4xl font-black  py-14"> Manage Urban Center </h1>
      <button
        onClick={() => setIsOpen(!open)}
        type="button"
        className="h-12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add Managers
      </button>
    </div>
    <UrbanCenterTable />
    <Modal
      isOpen={open}
      title={"Add Urban Center"}
      setIsOpen={setIsOpen}
      component={<AddUrbanCenterForm /> }
    //   component={<AddManagerForm isOpen={open} setIsOpen={setIsOpen} />}
    />
  </div>
)
}
export default UrbanCenter