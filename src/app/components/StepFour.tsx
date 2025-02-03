import { useContext } from "react";
import { InfoContext, StepContext } from "../context";

const StepFour = () => {
  const { step, setStep } = useContext(StepContext);
  const { info, setInfo } = useContext(InfoContext);

  const postInfo = async () => {
    let test = await fetch("/api/postRegister", {
      cache: "no-store",
      method: "POST",
      headers: undefined,
      body: JSON.stringify({
        name: info.name,
        email: info.email,
        phone: info.phone,
        plan: info.plan,
        addOns: info.addOns,
      }),
    });
    test = await test.json();
    // console.log(test);
  };

  const formHandler = (): void => {
    // if (!formValidation()) return;
    // setInfo({ ...info, name: name, email: email, phone: phone });
    postInfo();
    setStep(5);
  };

  const goBackStep = (): void => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const sumAddOns = (
    element: Array<{ title: string; frequency: string; value: number }>
  ) => {
    let sum = 0;
    for (let el of element) {
      sum += el.value;
    }
    return sum;
  };

  return (
    <div className="px-16 pt-10">
      <div className="flex mb-7 gap-1 flex-col">
        <h1 className="text-3xl font-bold text-blue-950">Finishing up</h1>
        <h5 className="text-gray-500">
          Double-check everything looks OK before confirming.
        </h5>
      </div>

      <main>
        <div className="bg-blue-50 p-4">
          <div className="flex flex-row justify-between items-center mb-4">
            <div className="flex flex-col gap-1 items-start">
              <h1 className="text-md font-medium text-blue-950">
                {info.plan.title.charAt(0).toUpperCase() +
                  info.plan.title.slice(1)}
              </h1>
              <button
                onClick={() => setStep(2)}
                className="text-gray-500 text-sm underline"
              >
                Change
              </button>
            </div>
            <h1 className="text-md font-medium text-blue-950">
              ${info.plan.value}/
              {info.plan.frequency === "yearly" ? "yr" : "mo"}
            </h1>
          </div>

          <div className="w-full py-[1px] bg-slate-200"></div>

          <div className="flex flex-col gap-4 mt-4">
            {info.addOns.map((e, i) => (
              <div key={e.title} className="flex flex-row justify-between">
                <h1 className="text-sm text-gray-400">{e.title}</h1>
                <h1 className="text-sm font-medium text-blue-950">
                  +${e.value}/{e.frequency === "yearly" ? "yr" : "mo"}
                </h1>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-row justify-between px-4 py-8">
          <h1 className="text-sm text-gray-400">Total (per month)</h1>
          <h1 className="text-xl text-[#483EFF] font-bold">
            +${info.plan.value + sumAddOns(info.addOns)}/
            {info.plan.frequency === "yearly" ? "yr" : "mo"}
          </h1>
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
export default StepFour;
