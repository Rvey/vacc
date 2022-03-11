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

const Routers = () => {
  return (
    <BrowserRouter>
     <Navigation /> 
      <div className={`${true ? 'pl-[18em]  pr-[1.5em]' : ''}  bg-white min-h-screen `}>
        <Routes>
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/managerLogin" element={<ManagerLogin />} />
          <Route path="/" element={<UserVaccine />} />
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
          <Route path="/nationalManager" element={<NationalManager />} />
          <Route path="/nationalManagerLogin" element={<NationalManagerLogin />} />
          <Route path="/patients" element={<ManagePatient />} />
       
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default Routers;
