// import mongoose from "mongoose";
// import { DB_NAME } from "./constant"
import { configDotenv } from "dotenv";
//import dotenv from "dotenv"
import connectDB from "./db/index.js"


configDotenv()
connectDB()


// import express from "express"

// const app = express()

//     (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI2}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.log("ERRR:", error)
//             throw error
//         })
//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening in port ${process.env.PORT}`);
            
//         })
//     } catch (error) {
//         console.log("ERROR:", error);
//         throw err
//     }
// })