import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserVaccine from "../Pages/UserVaccine";
import AdminLogin from "../Pages/AdminLogin";
import AdminDash from "../Pages/AdminDash";
import ManagerLogin from "../Pages/ManagerLogin";
import UrbanCenter from "../Pages/UrbanCenter/UrbanCenter";
const Routers = () => {
  return (
    <BrowserRouter>
      <div className="">
        <Routes>
            <Route path="/adminLogin" element={<AdminLogin />} />
            <Route path="/managerLogin" element={<ManagerLogin />} />
            <Route path="/" element={<UserVaccine />} />
            <Route path="/AdminDash" element={<AdminDash />} />
            <Route path="/urbanCenter" element={<UrbanCenter />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default Routers;
