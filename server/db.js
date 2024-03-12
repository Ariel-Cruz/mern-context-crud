import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

async function connectDB() {
    try{
        const db= await  mongoose.connect(MONGODB_URI);
        console.log("MongoDB connected to", db.connection.name);
    }catch(error){
        console.log(error);
    }
}
export default connectDB
