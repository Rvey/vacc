import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserVaccine from "../Pages/UserVaccine";
import ManagerLogin from "../Pages/ManagerLogin";
import AdminDash from "../Pages/AdminDash";
const Routers = () => {
  return (
    <BrowserRouter>
      <div className="">
        <Routes>
          <Route path="/managerLogin" element={<ManagerLogin />} />
          <Route path="/" element={<UserVaccine />} />
          <Route path="/AdminDash" element={<AdminDash />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default Routers;
