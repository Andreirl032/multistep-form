"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import githubLogo from "../../images/github-mark.svg";
import Image from "next/image";

export default function Start() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const getInfo = async () => {
    let data = await fetch("/api/registers", {
      cache: "no-store",
      method: "GET",
      headers: {
        email: email,
      },
    });
    data = await data.json();
    // console.log(data);
    await sessionStorage.setItem("register", JSON.stringify(data));
  };

  const formHandler = async (): Promise<void> => {
    if (!formValidation()) {
      return;
    }
    await getInfo();
    router.push("/form");
    //console.warn("pass");
  };

  const formValidation = (): boolean => {
    if (!isEmail(email)) {
      setEmailError("Invalid e-mail");
    }

    if (!email.trim()) {
      setEmailError("This field is required");
    }
    return !!email.trim() && isEmail(email);
  };

  const isEmail = (email: string) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  return (
    <div className="bg-slate-200 size-full absolute flex justify-center items-center">
      <div className="bg-slate-50 rounded-md p-16 w-[55rem] h-[37rem] flex flex-col gap-20">
        <Link
          className="absolute top-6 right-8 w-16 h-16"
          href={"https://github.com/Andreirl032/multistep-form"}
        >
          <Image priority src={githubLogo} alt="github" />
        </Link>
        <div className="flex flex-col items-center">
          <h1 className="text-6xl text-blue-900 font-bold">Tech service</h1>
          <h2 className="text-xl text-gray-700 font-medium">
            Your best experience
          </h2>
        </div>

        <form className="flex flex-col gap-3 items-center">
          <div className="flex flex-col gap-1 w-1/2">
            <div className="flex justify-between">
              <label className="text-blue-950" htmlFor="email">
                Insert your e-mail to update your information:
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
              value={email}
            />
          </div>
          <div>
            <button
              onClick={() => formHandler()}
              type="button"
              className="ml-auto mt-auto whitespace-nowrap inline bg-blue-900 text-white rounded-lg w-min py-3 px-5 hover:bg-blue-950"
            >
              Search
            </button>
          </div>
        </form>

        <div>
          <h1 className="text-xl">
            Doesn´t have infomation registered?{" "}
            {
              <Link className="text-blue-600 underline" href={"/form"}>
                Sign in
              </Link>
            }{" "}
            now!
          </h1>
        </div>
      </div>
    </div>
  );
}
