import mongoose from "mongoose";
// import { DATABASE_URL } from "../config/env.js";

export const RunMongoDb = async() =>{
    const DATABASE_URL = process.env.DATABASE_URL
    await mongoose.connect(DATABASE_URL)
    .then(()=>{
        console.log("MongoDb connected successfully!");
    })
    .catch((err)=>{
        console.log(err);
    })
}