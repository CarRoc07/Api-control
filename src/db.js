import mongoose from "mongoose";
import { URL_DB } from "./config.js";

export const connectDB = async () => {
    try {
        await mongoose.connect(URL_DB);
        console.log("DB is connected")
    } catch (error) {
        console.log(error)
    }
}

