import dbConnect from "@/app/lib/dbConnect";
import Register from "@/app/models/Register";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();

  try {
    const registers = await Register.find({});
    return NextResponse.json(registers, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message });
  }
}
