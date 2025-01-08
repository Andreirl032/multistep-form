"use client";

import { Context, useContext, useState } from "react";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import { InfoContext, StepContext } from "./context";
import Sidebar from "./components/Sidebar";
import StepThree from "./components/StepThree";
import StepFour from "./components/StepFour";
import StepFive from "./components/StepFive";

interface InfoInterface {
  name: string;
  email: string;
  phone: string;
  plan: { title: string; frequency: string; value: number };
  addOns: { title: string; frequency: string; value: number }[];
}

export default function Home() {
  const [step, setStep] = useState<number>(1);
  const [info, setInfo] = useState<InfoInterface>({
    name: "",
    email: "",
    phone: "",
    plan: { title: "", frequency: "", value: 0 },
    addOns: [],
  });

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
        <div className="bg-slate-50 rounded-md flex flex-row p-3 w-[55rem] h-[37rem]">
          <div>
            <Sidebar />
          </div>
          <InfoContext.Provider value={{info,setInfo}}>
            <div>{pageHandler(step)}</div>
            </InfoContext.Provider>
        </div>
      </div>
    </StepContext.Provider>
  );
}
