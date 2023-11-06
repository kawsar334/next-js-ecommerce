import { NextResponse } from "next/server"

import Product from "../../../../models/Product"
import Database from "@/utils/db";


export const GET = async (request) => {
    Database()
    try {
        const product = await Product.find();
        return new NextResponse(JSON.stringify(product), { status: 200 })

    } catch (err) {
        console.log(err)
        return new NextResponse(err, { status: 500 });
    }
}