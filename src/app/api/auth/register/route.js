import Database from "@/utils/db";
import { NextResponse } from "next/server";
import User from "../../../../../models/User";



export const POST = async(request)=>{
    const {name, email, password} = await request.json();
    await Database();
    try{
        const newUser = new User({
            name,
            email,
            password
        });
        const saveUser= await newUser.save();

    }catch(err){
        return new NextResponse()
    }
};