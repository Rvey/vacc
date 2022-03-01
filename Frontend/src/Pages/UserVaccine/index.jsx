import CheckForm from "../../components/Forms/CheckFrom";
import UserForm from "../../components/Forms/UserForm";
import { useState } from "react";
import { UserContext } from "../../components/Contexts/UserContext";
import DocSvg from "../../assets/doctor.svg";
const UserVaccine = () => {
  const [step, setStep] = useState(1);
  const [checkResult, setCheckResult] = useState();
  return (
    <div className="h-screen flex">
      <UserContext.Provider
        value={{ checkResult, setCheckResult, step, setStep }}
      >
        {step === 1 ? <CheckForm /> : step === 2 ? <UserForm /> : null}
      </UserContext.Provider>
      <img src={DocSvg} alt="" className="w-1/3 m-auto" />
    </div>
  );
};
export default UserVaccine;
