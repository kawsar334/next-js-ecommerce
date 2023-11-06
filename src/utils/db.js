
import mongoose from "mongoose";

const Database = async () => {
    try {
        mongoose.connect("mongodb+srv://kawsarfiroz:kawsar@cluster0.jxohydx.mongodb.net/?retryWrites=true&w=majority", {
        }).then(() => {
            console.log("connected dataabase")
        }).catch((err) => {
            console.log("database connection failed !", err)
        });
    } catch (err) {

    }

}

export default Database