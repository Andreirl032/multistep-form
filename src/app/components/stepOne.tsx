import { useContext, useEffect, useState } from "react";
import { StepContext } from "../context";

const StepOne = () => {
  const { step, setStep } = useContext(StepContext);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const [nameError, setNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string>("");

  const formHandler = (): void => {
    if (!formValidation()) return;
    console.log("Enviado com sucesso!");
  };

  const formValidation = (): boolean => {
    if (!isEmail(email)) {
      setEmailError("Invalid e-mail");
    }

    if (!name.trim()) {
      setNameError("This field is required");
    }
    if (!email.trim()) {
      setEmailError("This field is required");
    }
    if (!phone.trim()) {
      setPhoneError("This field is required");
    }
    return !(!name.trim() || !email.trim() || !phone.trim()) && isEmail(email);
  };

  const isEmail = (email: string) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  return (
    <div className="px-16 pt-10">
      <div className="flex mb-7 gap-1 flex-col">
        <h1 className="text-3xl font-bold text-blue-950">Personal Info</h1>
        <h5 className="text-gray-500">
          Please provide your name, e-mail address, and phone number.
        </h5>
      </div>

      <form className="flex gap-6 flex-col">
        <div className="flex flex-col gap-1">
          <div className="flex justify-between">
            <label className="text-blue-950" htmlFor="name">
              Name:
            </label>
            <label className="text-red-600 font-bold" htmlFor="name">
              {nameError}
            </label>
          </div>
          <input
            type="text"
            name="name"
            className={`${
              nameError === "" ? "border-gray-300" : "border-red-600"
            } border-solid border-2 outline-none rounded-md px-2 py-2 focus:border-blue-900`}
            onChange={(e) => {
              setName(e.target.value);
              setNameError("");
            }}
          />
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex justify-between">
            <label className="text-blue-950" htmlFor="email">
              E-mail address:
            </label>
            <label className="text-red-600 font-bold" htmlFor="email">
              {emailError}
            </label>
          </div>
          <input
            type="email"
            name="email"
            className={`${
              emailError === "" ? "border-gray-300" : "border-red-600"
            } border-solid border-2 outline-none rounded-md px-2 py-2 focus:border-blue-900`}
            onChange={(e) => {
              setEmail(e.target.value), setEmailError("");
            }}
          />
        </div>

        <div className="flex flex-col gap-1">
          <div>
            <div className="flex justify-between">
              <label className="text-blue-950" htmlFor="phone-number">
                Phone number:
              </label>
              <label className="text-red-600 font-bold" htmlFor="phone-number">
                {phoneError}
              </label>
            </div>
          </div>
          <input
            type="tel"
            name="phone-number"
            className={`${
              phoneError === "" ? "border-gray-300" : "border-red-600"
            } border-solid border-2 outline-none rounded-md px-2 py-2 focus:border-blue-900`}
            onChange={(e) => {
              setPhone(e.target.value), setPhoneError("");
            }}
          />
        </div>

        <button
          onClick={() => formHandler()}
          type="button"
          className="ml-auto mt-auto whitespace-nowrap inline bg-blue-900 text-white rounded-lg w-min py-3 px-5 hover:bg-blue-950"
        >
          Next step
        </button>
      </form>
    </div>
  );
};
export default StepOne;
