import "dotenv/config";
import "./database/connectdb.js";
import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";


import instrumentoRouter from "./routes/instrumento.route.js";



const app = express();


app.use(cors());

app.use(express.json());
app.use(cookieParser());


app.use("/api/v1/instrumentos", instrumentoRouter);



const PORT = process.env.PORT || 3020
app.listen(PORT, () => console.log("http://localhost:" + PORT));
