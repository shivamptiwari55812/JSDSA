import express from "express";
import dotenv from "dotenv";
dotenv.config("./env");
import cors from "cors";
const app = express();
import connectDb from "./database/connect.js";
connectDb();
const port = process.env.PORT;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
import userRoutes from './router/projectRoutes.js'


app.use("/api",userRoutes)



app.listen(port, () => {
  console.log(`Welcome to the server  `);
});
