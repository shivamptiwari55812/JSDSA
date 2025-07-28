import express from "express";
import dotenv from "dotenv";
dotenv.config("./env");
import cors from "cors";
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Welcome to the server  `);
});
