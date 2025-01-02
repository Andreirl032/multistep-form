import { createContext } from "react";

interface StepContextInterface {
  step: number;
  setStep: (c: number) => void;
}

export const StepContext = createContext<StepContextInterface>({
  step: 1,
  setStep: () => {},
});
