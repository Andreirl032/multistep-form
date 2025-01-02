import Image from "next/image";
import sidebar from "../../../assets/images/bg-sidebar-desktop.svg";
import { useContext } from "react";
import { StepContext } from "../context";

const Sidebar = () => {
  const { step, setStep } = useContext(StepContext);

  return (
    <div className="relative">
      <Image priority src={sidebar} alt="sidebar" />
      <div className="absolute flex top-10 left-9 gap-7 flex-col">
        <div className="flex flex-row items-center gap-4">
          <div
            className={`flex items-center justify-center border-2 border-gray-300 rounded-full w-10 h-10 ${
              step !== 1 ? "" : "bg-blue-200"
            }`}
          >
            <p
              className={`font-medium ${
                step !== 1 ? "text-gray-100" : "text-black"
              }`}
            >
              1
            </p>
          </div>

          <div>
            <h4 className="text-gray-400 font-medium text-sm">STEP 1</h4>
            <h3 className="text-gray-100 font-medium text-md">YOUR INFO</h3>
          </div>
        </div>
        <div className="flex flex-row items-center gap-4">
          <div
            className={`flex items-center justify-center border-2 border-gray-300 rounded-full w-10 h-10 ${
              step !== 2 ? "" : "bg-blue-200"
            }`}
          >
            <p
              className={`font-medium ${
                step !== 2 ? "text-gray-100" : "text-black"
              }`}
            >
              2
            </p>
          </div>
          <div>
            <h4 className="text-gray-400 font-medium text-sm">STEP 2</h4>
            <h3 className="text-gray-100 font-medium text-md">SELECT PLAN</h3>
          </div>
        </div>
        <div className="flex flex-row items-center gap-4">
          <div
            className={`flex items-center justify-center border-2 border-gray-300 rounded-full w-10 h-10 ${
              step !== 3 ? "" : "bg-blue-200"
            }`}
          >
            <p
              className={`font-medium ${
                step !== 3 ? "text-gray-100" : "text-black"
              }`}
            >
              3
            </p>
          </div>
          <div>
            <h4 className="text-gray-400 font-medium text-sm">STEP 3</h4>
            <h3 className="text-gray-100 font-medium text-md">ADD-ONS</h3>
          </div>
        </div>
        <div className="flex flex-row items-center gap-4">
          <div
            className={`flex items-center justify-center border-2 border-gray-300 rounded-full w-10 h-10 ${
              step !== 4 ? "" : "bg-blue-200"
            }`}
          >
            <p
              className={`font-medium ${
                step !== 4 ? "text-gray-100" : "text-black"
              }`}
            >
              4
            </p>
          </div>
          <div>
            <h4 className="text-gray-400 font-medium text-sm">STEP 4</h4>
            <h3 className="text-gray-100 font-medium text-md">SUMMARY</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
