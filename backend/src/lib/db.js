import mongoose from "mongoose";
import { ENV } from "../lib/env.js";


export const connectDb = async() => {
     try {
       if (!ENV.DB_URL) throw new Error("DB_URL is not defined");
       
       const conn = await mongoose.connect(ENV.DB_URL);
       console.log(`MongoDB Connected: ${conn.connection.host}`);
     }
     catch(error) {
       console.error(`Error: ${error.message}`);
       process.exit(1);
     }
}