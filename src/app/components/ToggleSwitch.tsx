import { ChangeEvent, FC } from 'react'

interface ToggleSwitchProps {
  switchState: boolean
  handleSwitchState: (e: ChangeEvent<HTMLInputElement>) => void
}
const ToggleSwitch: FC<ToggleSwitchProps> = ({
  switchState,
  handleSwitchState,
}) => {
  return (
    <label
      className="relative inline-block h-[22px] w-11 cursor-pointer"
      aria-label="Toggle Switch"
    >
      <div className="absolute right-0 top-0 flex h-full w-full rounded-3xl border border-[#E5E5E5] bg-white transition-all duration-300 ease-out has-[:checked]:bg-[#a00c92]">
        <input
          type="checkbox"
          className="peer h-0 w-0 opacity-0"
          checked={switchState}
          onChange={handleSwitchState}
        />
        <span className="absolute left-[2px] top-[2px] min-h-4 min-w-4 rounded-full bg-[#C8C8C8] transition-all duration-300 ease-out peer-checked:translate-x-[22px] peer-checked:bg-white"></span>
      </div>
    </label>
  )
}

export default ToggleSwitch