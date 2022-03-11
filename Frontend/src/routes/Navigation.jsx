import { Link, Navigate } from "react-router-dom";

const LinkStyle =
  "pl-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline";
const Navigation = () => {
  return (
    <nav className=" bg-ehe-900 w-[15em] z-10  h-screen items-center fixed justify-between py-5 dark:bg-gray-800 mr-10">
      <div className="flex flex-col flex-wrap justify-between h-full px-4">
        <div className="flex flex-col mt-4  md:mt-0 md:text-sm md:font-medium">
          <div className="flex">
            
            <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
             Appointments
            </span>
          </div>
          <div className="flex flex-col items-center bg-slate-700  mt-4 w-full py-6 rounded-lg  mb-4">
            <div className="h-20 w-20 rounded-full overflow-hidden">h</div>
            <div className="text-sm font-semibold mt-3 text-white">email</div>
            <div className="px-2 text-xs bg-blue-300 mt-3 rounded-md uppercase">
              role
            </div>
          </div>

          <>
            <Link to="/nationalManager" className={`${LinkStyle}`}>
              national manager
            </Link>
            <Link to="/patients" className={`${LinkStyle}`}>
              patients
            </Link>
            <Link to="/Managers" className={`${LinkStyle}`}>
              Manage Managers
            </Link>
            <Link to="/AdminDash" className={`${LinkStyle}`}>
              AdminDash
            </Link>
            <Link to="/urbanCenter" className={`${LinkStyle}`}>
              urbanCenter
            </Link>
          </>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              dispatch(clearData());
              <Navigate to={`/bomb`} />;
            }}
            className="text-white bg-gray-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-20 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            Log out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
