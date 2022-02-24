import CheckForm from "../../components/Forms/CheckFrom";
import UserForm from "../../components/Forms/UserForm";
import { useState } from "react";
const UserVaccine = () => {
  const [step, setStep] = useState(1);
  return (
    <div>
      {step === 1 ? (
        <CheckForm step={step} setStep={setStep} />
      ) : step === 2 ? (
        <UserForm step={step} setStep={setStep} />
      ) : null}
    </div>
  );
};
export default UserVaccine;
