import dbConnect from "@/app/lib/dbConnect";
import Register from "@/app/models/Register";
import { NextResponse } from "next/server";

export async function POST(request:any){
    const {name,email,phone,plan,addOns} = await request.json();
    await dbConnect();

    try{
        const checkRegister = await Register.findOne({email})
        if(!checkRegister){
            return NextResponse.json({success:false,message:"email não existe"})
        }
        const arr=[{}]
        const newRegister = new Register({name,email,phone,plan,arr})
        await newRegister.save()
        return NextResponse.json({success:true,message:"acessado"})
    } catch(err){
        return NextResponse.json({success:false,message:"Errito"})
    }

}