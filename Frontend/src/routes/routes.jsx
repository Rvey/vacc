import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserVaccine from "../Pages/UserVaccine";
import ManagerLogin from "../Pages/ManagerLogin";
const Routers = () => {
  return (
    <BrowserRouter>
      <div className="">
        <Routes>
          <Route path="/" element={<UserVaccine />} />
          <Route path="/managerLogin" element={<ManagerLogin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default Routers;
