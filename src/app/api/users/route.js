import { NextRequest, NextResponse } from "next/server"


export const GET =async(request)=>{
    try{
        // const user = await User.find();
        // return new NextResponse(user, {status:200})

    }catch(err){
        return new NextResponse("database Error ", {status:5000})
    }
} 