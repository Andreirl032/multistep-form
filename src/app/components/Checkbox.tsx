import React from 'react'

interface PropsType {
  label: string
  id?: string
  checked: boolean
  handleChange: React.ChangeEventHandler<HTMLInputElement>
  disabled?: boolean
}

const Checkbox: React.FC<PropsType> = ({
  label,
  id = 'default-checkbox',
  checked,
  handleChange,
  disabled = false,
}) => {
  return (
    <div className="relative flex items-center gap-2">
      <input
        type="checkbox"
        id={id}
        onChange={handleChange}
        checked={checked}
        disabled={disabled}
        className="size-6 transform cursor-pointer appearance-none rounded-lg border-2 border-[#22031F] transition duration-[120ms] ease-in-out checked:border-none checked:border-[#463FFE] checked:bg-[#463FFE] disabled:cursor-not-allowed disabled:opacity-50"
        aria-checked={checked}
      />
      <label
        htmlFor={id}
        className="cursor-pointer text-sm font-medium text-gray-800"
      >
        {label}
      </label>
      {checked && (
        <span className="pointer-events-none absolute left-[7.5px] top-[9px] rotate-[40deg] scale-x-[-1] transform text-lg font-bold text-white">
          L
        </span>
      )}
    </div>
  )
}

export default Checkbox