import CheckForm from "../../components/Forms/CheckFrom";
import UserForm from "../../components/Forms/UserForm";
import { useState } from "react";
import { UserContext } from "../../components/Contexts/UserContext";
const UserVaccine = () => {
  const [step, setStep] = useState(1);
  const [checkResult, setCheckResult] = useState();
  return (
    <div>
      <UserContext.Provider
        value={{ checkResult, setCheckResult, step, setStep }}
      >
        {step === 1 ? <CheckForm /> : step === 2 ? <UserForm /> : null}
      </UserContext.Provider>
    </div>
  );
};
export default UserVaccine;
