import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

//function for connecting DB
const connectDb = async () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("MongoDB connected ");
    })
    .catch((error) => {
      console.error(error);
    });
};

export default connectDb;
