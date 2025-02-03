import dbConnect from "@/app/lib/dbConnect";
import Register from "@/app/models/Register";
import { NextResponse } from "next/server";

export async function GET(request: any) {
  const email = await request.headers.get("email");
  if (!email) {
    return NextResponse.json(
      { success: false, message: "E-mail é obrigatório" },
      { status: 400 }
    );
  }
  await dbConnect();

  try {
    const checkRegister = await Register.findOne({ email });
    if (checkRegister) {
      return NextResponse.json(checkRegister);
    }
    return NextResponse.json({ success: false, message: "E-mail não cadastrado" });
  } catch (err: any) {
    return NextResponse.json({ error: err.message });
  }
}
