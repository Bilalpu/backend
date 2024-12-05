// import mongoose from "mongoose";
// import { DB_NAME } from "./constant"
import { configDotenv } from "dotenv";
//import dotenv from "dotenv"
import connectDB from "./db/index.js"


configDotenv()
connectDB()
    .then( ()=>{
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is runnig at port :${proccess.env.PORT}`);
            
        })
    })
    .catch(() => {
    console.log("MONGO db connection failed due to some error !!!! ",err);
    
})


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