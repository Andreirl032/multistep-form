"use client";

import { Context, useContext, useState } from "react";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import { StepContext } from "./context";
import Sidebar from "./components/Sidebar";
import StepThree from "./components/StepThree";
import StepFour from "./components/StepFour";
import StepFive from "./components/StepFive";

interface StepContextInterface {
  step: number;
  setStep: (s: number) => void;
}

export default function Home() {
  const [step, setStep] = useState<number>(1);

  const pageHandler = (step: number) => {
    switch (step) {
      case 1:
        return <StepOne />;
      case 2:
        return <StepTwo />;
      case 3:
        return <StepThree />;
      case 4:
        return <StepFour />;
      case 5:
        return <StepFive />;
      default:
        return <StepOne />;
    }
  };

  return (
    <StepContext.Provider value={{ step, setStep }}>
      <div className="bg-slate-200 size-full absolute flex justify-center items-center">
        <div className="bg-slate-50 rounded-md flex flex-row p-3">
          <div>
            <Sidebar />
          </div>
          <div>{pageHandler(step)}</div>
        </div>
      </div>
    </StepContext.Provider>
  );
}
