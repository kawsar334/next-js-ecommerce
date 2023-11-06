import Database from "@/utils/db"
import { NextResponse } from "next/server"
import product from "../../../../../models/Product";


export const GET= async (request,{params})=>{
    const id = params.id;
    Database();
    try{
        const post = await product.findById(id);
        return new NextResponse(JSON.stringify(post),{status:200})
    }catch(err){
    return new NextResponse(err, {status:500})
    }
}