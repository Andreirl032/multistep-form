import { useContext, useEffect, useState } from "react";
import { InfoContext, StepContext } from "../context";
import Checkbox from "./Checkbox";

const StepThree = () => {
  const { step, setStep } = useContext(StepContext);
  const { info, setInfo } = useContext(InfoContext);

  const searchAddOn = (searchTitle: string) => {
    for (let element of info.addOns) {
      if (element.title === searchTitle) {
        return true;
      }
    }
    return false;
  };

  // console.warn(info.addOns);

  const [isChecked1, setIsChecked1] = useState(searchAddOn("Online service"));
  const [isChecked2, setIsChecked2] = useState(searchAddOn("Larger storage"));
  const [isChecked3, setIsChecked3] = useState(
    searchAddOn("Customizable profile")
  );

  const handleCheckboxChange1: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setIsChecked1(e.target.checked);
  };
  const handleCheckboxChange2: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setIsChecked2(e.target.checked);
  };
  const handleCheckboxChange3: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setIsChecked3(e.target.checked);
  };

  useEffect(() => {
    if (isChecked1 && !searchAddOn("Online service")) {
      setInfo({
        ...info,
        addOns: [
          ...info.addOns,
          {
            title: "Online service",
            frequency: info.plan.frequency,
            value: info.plan.frequency === "yearly" ? 10 : 1,
          },
        ],
      });
    } else if (!isChecked1 && searchAddOn("Online service")) {
      const prevInfo = info;
      setInfo({
        ...info,
        addOns: prevInfo.addOns.filter(
          (item) => item.title !== "Online service"
        ),
      });
    }
  }, [isChecked1]);

  useEffect(() => {
    if (isChecked2 && !searchAddOn("Larger storage")) {
      setInfo({
        ...info,
        addOns: [
          ...info.addOns,
          {
            title: "Larger storage",
            frequency: info.plan.frequency,
            value: info.plan.frequency === "yearly" ? 20 : 2,
          },
        ],
      });
    } else if (!isChecked2 && searchAddOn("Larger storage")) {
      const prevInfo = info;
      setInfo({
        ...info,
        addOns: prevInfo.addOns.filter(
          (item) => item.title !== "Larger storage"
        ),
      });
    }
  }, [isChecked2]);

  useEffect(() => {
    if (isChecked3 && !searchAddOn("Customizable profile")) {
      setInfo({
        ...info,
        addOns: [
          ...info.addOns,
          {
            title: "Customizable profile",
            frequency: info.plan.frequency,
            value: info.plan.frequency === "yearly" ? 20 : 2,
          },
        ],
      });
    } else if (!isChecked3 && searchAddOn("Customizable profile")) {
      const prevInfo = info;
      setInfo({
        ...info,
        addOns: prevInfo.addOns.filter(
          (item) => item.title !== "Customizable profile"
        ),
      });
    }
  }, [isChecked3]);

  const formHandler = (): void => {
    // setInfo({
    //   ...info,
    //   plan: {
    //     title: selectedPlan,
    //     frequency: convertSwitchToFrequency(),
    //     value: convertTableToPrice(),
    //   },
    // });

    setStep(4);
  };

  const goBackStep = (): void => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  // useEffect(() => {
  //   setInfo({
  //     ...info,
  //     plan: { ...info.plan, title: selectedPlan, value: convertTableToPrice() },
  //   });
  // }, [selectedPlan]);

  // useEffect(() => {
  //   setInfo({
  //     ...info,
  //     plan: {
  //       ...info.plan,
  //       frequency: convertSwitchToFrequency(),
  //       value: convertTableToPrice(),
  //     },
  //   });
  // }, [isSwitchOn]);

  return (
    <div className="px-16 pt-10">
      <div className="flex mb-7 gap-1 flex-col">
        <h1 className="text-3xl font-bold text-blue-950">Pick add-ons</h1>
        <h5 className="text-gray-500">
          Add-ons help enhance your gaming experience.
        </h5>
      </div>

      <main className="flex flex-col gap-4">
        <button
          className={`flex flex-row justify-between items-center rounded-lg border-solid border-2 gap-24 py-4 px-6 ${
            isChecked1 ? "border-blue-900 bg-blue-50" : "border-gray-400"
          }`}
        >
          <div className="flex flex-row gap-2">
            <Checkbox
              id="1"
              label=""
              checked={isChecked1}
              handleChange={handleCheckboxChange1}
            />
            <div className="flex flex-col gap-1 items-start">
              <h1 className="text-md font-medium text-blue-950">
                Online service
              </h1>
              <h2 className="text-sm text-gray-500">
                Access to multiplayer games
              </h2>
            </div>
          </div>
          <h1 className="text-[#7C76CA]">
            {info.plan.frequency === "yearly" ? "+$10/yr" : "+$1/mo"}
          </h1>
        </button>
        <button
          className={`flex flex-row justify-between items-center rounded-lg border-solid border-2 gap-24 py-4 px-6 ${
            isChecked2 ? "border-blue-900 bg-blue-50" : "border-gray-400"
          }`}
        >
          <div className="flex flex-row gap-2">
            <Checkbox
              id="2"
              label=""
              checked={isChecked2}
              handleChange={handleCheckboxChange2}
            />
            <div className="flex flex-col gap-1 items-start">
              <h1 className="text-md font-medium text-blue-950">
                Larger storage
              </h1>
              <h2 className="text-sm text-gray-500">Extra 1TB of cloud save</h2>
            </div>
          </div>
          <h1 className="text-[#7C76CA]">
            {info.plan.frequency === "yearly" ? "+$20/yr" : "+$2/mo"}
          </h1>
        </button>
        <button
          className={`flex flex-row justify-between items-center rounded-lg border-solid border-2 gap-24 py-4 px-6 ${
            isChecked3 ? "border-blue-900 bg-blue-50" : "border-gray-400"
          }`}
        >
          <div className="flex flex-row gap-2">
            <Checkbox
              id="3"
              label=""
              checked={isChecked3}
              handleChange={handleCheckboxChange3}
            />
            <div className="flex flex-col gap-1 items-start">
              <h1 className="text-md font-medium text-blue-950">
                Customizable profile
              </h1>
              <h2 className="text-sm text-gray-500">
                Custom theme on your profile
              </h2>
            </div>
          </div>
          <h1 className="text-[#7C76CA]">
            {info.plan.frequency === "yearly" ? "+$20/yr" : "+$2/mo"}
          </h1>
        </button>
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
export default StepThree;
