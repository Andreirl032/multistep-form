import dbConnect from "@/app/lib/dbConnect";
import Register from "@/app/models/Register";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  const { name, email, phone, plan, addOns } = await request.json();
  await dbConnect();

  try {
    const checkRegister = await Register.findOne({ email });
    if (checkRegister) {
      // return NextResponse.json({success:false,message:"email já existe"})
      const newRegister = new Register({ name, email, phone, plan, addOns });
      await Register.findOneAndUpdate(
        { email: email },
        { name: name, phone: phone, plan: plan, addOns: addOns }
      );
      return NextResponse.json({ success: true, message: "acessado" });
    }
    const newRegister = new Register({ name, email, phone, plan, addOns });
    await newRegister.save();
    return NextResponse.json({ success: true, message: "acessado" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, message: "Errito" });
  }
}
