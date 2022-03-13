import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./Private.routes";
import UserVaccine from "../Pages/UserVaccine";
import AdminLogin from "../Pages/AdminLogin";
import AdminDash from "../Pages/AdminDash";
import ManagerLogin from "../Pages/ManagerLogin";
import UrbanCenter from "../Pages/UrbanCenter/UrbanCenter";
import NationalManager from "../Pages/NationalManager";
import ManagePatient from "../Pages/ManagePatients";
import Navigation from "./Navigation";
import NationalManagerLogin from "../Pages/NationalManagerLogin";
import { useCookies } from "react-cookie";
const Routers = () => {
  const [cookies, setCookie] = useCookies();
  return (
    <BrowserRouter>
      {cookies.user && <Navigation />}
      <div
        className={`${
          cookies.user ? "pl-[13em]  pr-[1.5em]" : ""
        }  bg-white min-h-screen `}
      >
        <Routes>
          <Route path="/" element={<UserVaccine />} />

          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/managerLogin" element={<ManagerLogin />} />
          <Route
            path="/nationalManagerLogin"
            element={<NationalManagerLogin />}
          />

          <Route
            path="/AdminDash"
            element={
              <PrivateRoute user="admin">
                <AdminDash />
              </PrivateRoute>
            }
          />

          <Route
            path="/urbanCenter"
            element={
              <PrivateRoute user="manager">
                <UrbanCenter />
              </PrivateRoute>
            }
          />

          <Route
            path="/patients"
            element={
              // <PrivateRoute user="nationalManager">
              // </PrivateRoute>
                <ManagePatient />
            }
          />

          <Route
            path="/nationalManager"
            element={
              <PrivateRoute user="admin">
                <NationalManager />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default Routers;
