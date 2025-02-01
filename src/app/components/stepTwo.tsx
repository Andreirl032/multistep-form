import { ChangeEvent, useContext, useEffect, useState } from "react";
import { InfoContext, StepContext } from "../context";
import Image from "next/image";
import iconAdvanced from "../../../assets/images/icon-advanced.svg";
import iconArcade from "../../../assets/images/icon-arcade.svg";
import iconPro from "../../../assets/images/icon-pro.svg";
import ToggleSwitch from "./ToggleSwitch";

type planName = "" | "arcade" | "advanced" | "pro";

const StepTwo = () => {
  const { step, setStep } = useContext(StepContext);
  const { info, setInfo } = useContext(InfoContext);

  const [selectedPlan, setSelectedPlan] = useState<planName>(info.plan.title);

  const convertFrequencyToSwitch = (freq: string): boolean => {
    if (freq === "monthly") {
      return false;
    } else if (freq === "yearly") {
      return true;
    }
    return false;
  };

  const [isSwitchOn, setIsSwitchOn] = useState(
    convertFrequencyToSwitch(info.plan.frequency)
  );

  const priceTable = {
    monthly: { arcade: 9, advanced: 12, pro: 15 },
    yearly: { arcade: 90, advanced: 120, pro: 150 },
  };

  const handleSwitchState = (e: ChangeEvent<HTMLInputElement>) => {
    const newState = e.target.checked;
    setIsSwitchOn(newState);
  };

  const convertSwitchToFrequency = (): string => {
    if (isSwitchOn === false) {
      return "monthly";
    } else {
      return "yearly";
    }
  };

  const convertTableToPrice = (): number => {
    if (isSwitchOn === false) {
      if (selectedPlan === "arcade") {
        return 9;
      } else if (selectedPlan === "advanced") {
        return 12;
      } else if (selectedPlan === "pro") {
        return 15;
      }
    } else {
      if (selectedPlan === "arcade") {
        return 90;
      } else if (selectedPlan === "advanced") {
        return 120;
      } else if (selectedPlan === "pro") {
        return 150;
      }
    }
    return 0;
  };

  const formHandler = (): void => {
    // if (!formValidation()) return;
    // setInfo({ ...info, name: name, email: email, phone: phone });

    setInfo({
      ...info,
      plan: {
        title: selectedPlan,
        frequency: convertSwitchToFrequency(),
        value: convertTableToPrice(),
      },
    });
    setStep(3);
  };

  const goBackStep = (): void => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  useEffect(() => {
    setInfo({
      ...info,
      plan: { ...info.plan, title: selectedPlan, value: convertTableToPrice() },
    });
  }, [selectedPlan]);

  useEffect(() => {
    setInfo({
      ...info,
      plan: {
        ...info.plan,
        frequency: convertSwitchToFrequency(),
        value: convertTableToPrice(),
      },
    });
  }, [isSwitchOn]);

  return (
    <div className="px-16 pt-10">
      <div className="flex mb-7 gap-1 flex-col">
        <h1 className="text-3xl font-bold text-blue-950">Select your plan</h1>
        <h5 className="text-gray-500">
          You have the option of monthly or year billing.
        </h5>
      </div>

      <main className="flex flex-col gap-8">
        <div id="selection" className="flex flex-row gap-4">
          <button
            onClick={() => setSelectedPlan("arcade")}
            className={`flex flex-col justify-between items-start rounded-lg border-blue-900 border-solid border-2 gap-12 w-[8rem] pl-4 pr-10 py-3 ${
              selectedPlan === "arcade"
                ? "border-blue-900 bg-blue-100"
                : "border-gray-400"
            }`}
          >
            <Image priority src={iconArcade} alt="iconArcade" />
            <div>
              <h1 className="text-md font-medium text-blue-950">Arcade</h1>
              <h2 className="text-sm text-gray-500">$9/mo</h2>
            </div>
          </button>
          <button
            onClick={() => setSelectedPlan("advanced")}
            className={`flex flex-col justify-between items-start rounded-lg border-solid border-2 gap-12 w-[8rem] pl-4 pr-10 py-3 ${
              selectedPlan === "advanced"
                ? "border-blue-900 bg-blue-100"
                : "border-gray-400"
            }`}
          >
            <Image priority src={iconAdvanced} alt="iconAdvanced" />
            <div>
              <h1 className="text-md font-medium text-blue-950">Advanced</h1>
              <h2 className="text-sm text-gray-500">$12/mo</h2>
            </div>
          </button>
          <button
            onClick={() => setSelectedPlan("pro")}
            className={`flex flex-col justify-between items-start rounded-lg border-blue-900 border-solid border-2 gap-12 w-[8rem] pl-4 pr-10 py-3 ${
              selectedPlan === "pro"
                ? "border-blue-900 bg-blue-100"
                : "border-gray-400"
            }`}
          >
            <Image priority src={iconPro} alt="iconPro" />
            <div>
              <h1 className="text-md font-medium text-blue-950">Pro</h1>
              <h2 className="text-sm text-gray-500">$15/mo</h2>
            </div>
          </button>
        </div>

        <div
          id="monthly-yearly"
          className="w-full bg-slate-200 inline-flex gap-3 justify-center py-2 rounded-md"
        >
          <h1>Montly</h1>
          <ToggleSwitch
            handleSwitchState={handleSwitchState}
            switchState={isSwitchOn}
          />
          <h1>Yearly</h1>
        </div>
      </main>
      <div className="flex flex-row justify-between mt-20">
        <button
          onClick={() => goBackStep()}
          type="button"
          className="mt-auto whitespace-nowrap inline bg-transparent text-gray-500 rounded-lg w-min py-3 hover:text-blue-950"
        >
          Go Back
        </button>
        <button
          onClick={() => formHandler()}
          type="button"
          className="ml-auto mt-auto whitespace-nowrap inline bg-blue-900 text-white rounded-lg w-min py-3 px-5 hover:bg-blue-950"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};
export default StepTwo;
