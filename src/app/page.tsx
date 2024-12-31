"use client"

import Image from "next/image";
import sidebar from "../../assets/images/bg-sidebar-desktop.svg"
import { useState } from "react";
import StepOne from "./components/stepOne";

export default function Home() {
  const [step,setStep] = useState<Number>(1)

  return (
    <div className="bg-slate-200 size-full absolute flex justify-center items-center">
      <div className="bg-slate-50 rounded-md flex flex-row p-3">
        <div>
        <Image src={sidebar} alt="sidebar"/>
        </div>
        <div>
        <StepOne/>
        </div>
      </div>
    </div>
  );
}
