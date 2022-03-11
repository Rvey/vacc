import CheckForm from "./CheckFrom";
import UserForm from "./UserForm";
import { useState } from "react";
import { UserContext } from "../Context/UserContext";
import DocSvg from "../Shared/XSvg";
const MultiForm = () => {
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
export default MultiForm;
