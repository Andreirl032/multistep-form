import Image from "next/image";
import React from "react";
import iconCheckmark from "../../../images/icon-checkmark.svg";

interface PropsType {
  checked: boolean;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
}

const Checkbox: React.FC<PropsType> = ({
  checked,
  handleChange,
  disabled = false,
}) => {
  return (
    <div className="relative flex items-center gap-2">
      <input
        type="checkbox"
        onChange={handleChange}
        checked={checked}
        disabled={disabled}
        className="size-6 transform cursor-pointer appearance-none rounded-lg border-2 border-[#22031F] transition duration-[120ms] ease-in-out checked:border-none checked:border-[#463FFE] checked:bg-[#463FFE] disabled:cursor-not-allowed disabled:opacity-50"
        aria-checked={checked}
      />
      {checked && (
        <Image
          className="pointer-events-none absolute left-[14%] top-[37%] w-[75%] h-[30%]"
          priority
          src={iconCheckmark}
          alt="checkmark"
        />
      )}
      {/* {checked && (
        <span className="pointer-events-none absolute left-[25%] top-[20%] rotate-[40deg] scale-x-[-1] transform text-lg font-bold text-white">
          L
        </span>
      )} */}
    </div>
  );
};

export default Checkbox;
