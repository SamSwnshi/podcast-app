import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connect from "./db/config.js";


dotenv.config();
const port = process.env.PORT;

const app = express();

app.use(cors())

app.listen(port,()=>{
    connect()
    console.log(`Server Started at Port: ${port}`)
})