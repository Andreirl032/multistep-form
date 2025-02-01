import { createContext } from "react";

type planName = "" | "arcade" | "advanced" | "pro";

interface StepContextInterface {
  step: number;
  setStep: (c: number) => void;
}

interface InfoInterface {
  name: string;
  email: string;
  phone: string;
  plan: { title: planName; frequency: string; value: number };
  addOns: { title: string; frequency: string; value: number }[];
}

interface InfoContextInterface {
  info: InfoInterface;
  setInfo: (c: InfoInterface) => void;
}

export const StepContext = createContext<StepContextInterface>({
  step: 1,
  setStep: () => {},
});

export const InfoContext = createContext<InfoContextInterface>({
  info: {
    name: "",
    email: "",
    phone: "",
    plan: { title: "", frequency: "", value: 0 },
    addOns: [],
  },
  setInfo: () => {},
});
