// require('dotenv').config({path:'./env'}) 
import dotenv from "dotenv"
import connectDB from "./db/db.js";
import { app } from "./app.js";

dotenv.config({
    path:'./env'
})

connectDB()   
.then(() => {
    app.on("ERROR", (error) => {
        console.log("Error:", error);
        throw error
    })

    app.listen(process.env.PORT || 8000 ,() => {
        console.log(`Server is running at port: ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGODB connection is FAILED",err);  
})











/*  Approach 1:making and exporting function in same file

import mongoose from "mongoose";
import {DB_NAME} from './constants'
import express from "express"
const app = express()

// if-es method
( async () => {
    try {
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("Error", (error) => {
            console.error("Error: ", error)
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR:",error)
        throw error
    }
})()

*/