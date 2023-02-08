import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import  bodyParser from "body-parser";
import userRouter from "./src/Routes/User/user.js";
import * as dotenv from 'dotenv'

dotenv.config()
const urlDB = process.env.DB_URL;
mongoose.set('strictQuery', false);
mongoose.connect(urlDB, () => console.log("API Connected to MongoDB"));
const db = mongoose.connection;
db.on("error", (error) => {
  console.log(error);
});

const app = express();
const PORT = 3003;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
    console.log(`API Server Started at http://localhost:${PORT}/`);
  });

app.use("/user",userRouter);
