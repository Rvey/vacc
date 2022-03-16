import { Link, Navigate, useLocation, NavLink } from "react-router-dom";
import { useCookies } from "react-cookie";

const LinkStyle =
  "pl-4 py-2 mt-2 text-sm font-semibold text-gray-900 rounded-lg bg-red-700";
const LinkStyleH =
  "pl-4 py-2 mt-2 text-sm font-semibold text-gray-900 rounded-lg bg-blue-700 ";
const Navigation = () => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const location = useLocation();
  return (
    <nav className=" bg-ehe-900 w-[15em] z-10  h-screen items-center fixed justify-between py-5 dark:bg-gray-800 mr-10">
      <div className="flex flex-col flex-wrap justify-between h-full px-4">
        <div className="flex flex-col mt-4  md:mt-0 md:text-sm md:font-medium">
          <div className="flex">
            <span className="text-center text-lg font-semibold whitespace-nowrap dark:text-white">
              COVID-22
            </span>
          </div>
          <div className="flex flex-col items-center bg-slate-700  mt-4 w-full py-6 rounded-lg  mb-4">
            <div className="h-20 w-20 rounded-full overflow-hidden">h</div>
            <div className="text-sm font-semibold mt-3 text-white">
              {cookies?.user?.email}
            </div>
            <div className="px-2 text-xs bg-blue-300 mt-3 rounded-md uppercase">
              {cookies?.user?.role}
            </div>
            <div className="px-2 text-xs bg-blue-300 mt-3 rounded-md uppercase">
              {cookies?.user?.region}
            </div>
          </div>

          <>
            {cookies?.user?.role == "admin" && (
              <>
                <NavLink
                  to="/nationalManager"
                  className={`pl-4 py-2 mt-2 text-sm font-semibold  rounded-lg text-white  ${
                    "/nationalManager" == location.pathname
                      ? "bg-gray-400"
                      : "bg-gray-600"
                  }  `}
                >
                  national manager
                </NavLink>

                <NavLink
                  to="/AdminDash"
                  className={`pl-4 py-2 mt-2 text-sm font-semibold  rounded-lg text-white   ${
                    "/AdminDash" == location.pathname
                      ? "bg-gray-400"
                      : "bg-gray-600"
                  }  `}
                >
                  AdminDash
                </NavLink>
              </>
            )}

            {cookies?.user?.role == "managers" && (
              <Link
                to="/urbanCenter"
                className={`pl-4 py-2 mt-2 text-sm font-semibold  rounded-lg  text-white ${
                  "/managers" == location.pathname
                    ? "bg-gray-400"
                    : "bg-gray-600"
                }  `}
              >
                urbanCenter
              </Link>
            )}

            {cookies?.user?.role == "nationalManager" && (
              <Link
                to="/patients"
                className={`pl-4 py-2 mt-2 text-sm font-semibold  rounded-lg text-white  ${
                  "/patients" == location.pathname
                    ? "bg-gray-400"
                    : "bg-gray-600"
                }  `}
              >
                patients
              </Link>
            )}
          </>
        </div>
        <div className="w-full flex justify-center">
          <button
            type="button"
            onClick={() => {
              removeCookie("user");
            }}
            className="text-white bg-gray-700 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm  py-2.5  dark:bg-gray-600 dark:hover:bg-red-700 dark:focus:ring-red-800 w-full text-center"
          >
            Log out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
