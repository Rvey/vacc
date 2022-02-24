import CheckForm from "./components/Forms/CheckFrom";
import UserForm from "./components/Forms/UserForm";
import { useState } from "react";
function App() {
  const [step, setStep] = useState(1);
  return (
    <div>
      {step}
      {step === 1 ? (
        <CheckForm step={step} setStep={setStep} />
      ) : step === 2 ? (
        <UserForm step={step} setStep={setStep} />
      ) : null}
    </div>
  );
}

export default App;
