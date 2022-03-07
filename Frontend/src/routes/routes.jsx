import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./Private.routes";
import UserVaccine from "../Pages/UserVaccine";
import AdminLogin from "../Pages/AdminLogin";
import AdminDash from "../Pages/AdminDash";
import ManagerLogin from "../Pages/ManagerLogin";
import UrbanCenter from "../Pages/UrbanCenter/UrbanCenter";
import NationalManager from "../Pages/NationalManager";
const Routers = () => {
  return (
    <BrowserRouter>
      <div className="">
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
          <Route
            path="/nationalManager"
            element={
             
                <NationalManager />
            
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default Routers;
