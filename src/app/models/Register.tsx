import mongoose, { Document, Schema } from "mongoose";

type planName = "" | "arcade" | "advanced" | "pro";
export interface IRegister extends Document {
  name: string;
  email: string;
  phone: string;
  plan: { title: planName; frequency: string; value: number };
  addOns: Array<{ title: string; frequency: string; value: number }>;
}

const registerSchema: Schema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  plan: {
    type: { title: String, frequency: String, value: Number },
    required: true,
  },
  addOns: Array<{ title: String; frequency: String; value: Number }>,
});

const Register = mongoose.models.Register || mongoose.model<IRegister>("Register",registerSchema);

export default Register;
