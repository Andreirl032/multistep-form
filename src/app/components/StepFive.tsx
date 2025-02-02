import { useContext } from "react";
import { InfoContext, StepContext } from "../context";
import Image from "next/image";
import iconThankYou from "../../../assets/images/icon-thank-you.svg";

const StepFive = () => {
  const { step, setStep } = useContext(StepContext);
  const { info, setInfo } = useContext(InfoContext);

  const formHandler = (): void => {
    // if (!formValidation()) return;
    // setInfo({ ...info, name: name, email: email, phone: phone });
    // setStep(3);
  };

  const goBackStep = (): void => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="px-16 pt-10">
      <div className="flex flex-col gap-6 items-center ml-10 mt-28">
        <Image priority src={iconThankYou} alt="icon thank you" />
        <h1 className="text-3xl font-bold text-blue-950">Thank you!</h1>
        <h2 className="text-sm text-center break-words w-[24rem] text-gray-500">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com
        </h2>
      </div>
    </div>
  );
};
export default StepFive;
