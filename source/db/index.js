import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect
            (`${process.env.MONGODB_URI}`)
        console.log(`\n MongoDB is connected successfully !! DB HOST : $
            {connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("MONGODB Connection error are occured",error);
        process.exit(1)
    }
}
export default connectDB