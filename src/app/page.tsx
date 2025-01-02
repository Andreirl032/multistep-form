"use client";

import Image from "next/image";
import sidebar from "../../assets/images/bg-sidebar-desktop.svg";
import { Context, useContext, useState } from "react";
import StepOne from "./components/stepOne";
import StepTwo from "./components/stepTwo";
import { StepContext } from "./context";

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
    }
  };

  return (
    <StepContext.Provider value={{ step, setStep }}>
      <div className="bg-slate-200 size-full absolute flex justify-center items-center">
        <div className="bg-slate-50 rounded-md flex flex-row p-3">
          <div>
            <Image priority src={sidebar} alt="sidebar" />
          </div>
          <div>{pageHandler(step)}</div>
        </div>
      </div>
    </StepContext.Provider>
  );
}
