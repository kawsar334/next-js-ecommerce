

import mongoose, { Mongoose } from "mongoose";


const productSchema = new mongoose.Schema({


    // name: {
    //     type: String,
    //     required: true,
    // },

    // email: {
    //     type: String,
    //     required: true,
    // },

    // password: {
    //     type: String,
    //     required: true,
    // },

}, { timestamps: true });



const product= mongoose.models.Product || mongoose.model('Product', productSchema);

// const product = mongoose.model("Product", productSchema);
export default product;