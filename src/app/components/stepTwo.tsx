import { useContext, useEffect } from "react";
import { InfoContext, StepContext } from "../context";

const StepTwo = () => {
  const { step, setStep } = useContext(StepContext);
    const { info, setInfo } = useContext(InfoContext);

    const formHandler = (): void => {
      // if (!formValidation()) return;
      // setInfo({ ...info, name: name, email: email, phone: phone });
      setStep(3);
    };

    const goBackStep = (): void => {
      if(step>1){
        setStep(step-1);
      }
    }

  return (
    <div className="px-16 pt-10">
      <div className="flex mb-7 gap-1 flex-col">
        <h1 className="text-3xl font-bold text-blue-950">
          Select your plan
        </h1>
        <h5 className="text-gray-500">
          You have the option of monthly or year billing. 
        </h5>
      </div>

      <form action={() => formHandler()} className="flex gap-6 flex-col">
        <div className="flex flex-col gap-1">
          <label className="text-blue-950" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            name="name"
            className="border-gray-300 border-solid border-2 outline-none rounded-md px-2 py-2 focus:border-blue-900"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-blue-950" htmlFor="email">
            E-mail address:
          </label>
          <input
            type="email"
            name="email"
            className="border-gray-300 border-solid border-2 outline-none rounded-md px-2 py-2 focus:border-blue-900"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-blue-950" htmlFor="phone-number">
            Phone number:
          </label>
          <input
            type="tel"
            name="phone-number"
            className="border-gray-300 border-solid border-2 outline-none rounded-md px-2 py-2 focus:border-blue-900"
          />
        </div>

        <div className="flex flex-row justify-between">
        <button onClick={()=>goBackStep()} type="button" className="mt-auto whitespace-nowrap inline bg-transparent text-gray-500 rounded-lg w-min py-3 hover:text-blue-950">Go Back</button>
        <button
          type="button"
          className="ml-auto mt-auto whitespace-nowrap inline bg-blue-900 text-white rounded-lg w-min py-3 px-5 hover:bg-blue-950"
        >
          Next Step
        </button>
        </div>
      </form>
    </div>
  );
};
export default StepTwo;
