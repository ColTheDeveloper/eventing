import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import eventRoute from "./routes/eventRoute.js"
import imageRoute from "./routes/imageUploadRoute.js"

const app=express();
dotenv.config();

app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors(
    {
        origin:["https://eventing.netlify.app"],
        methods:["GET","POST","PUT","DELETE"],
        credentials:true
    }
))
app.use(express.static("public"))
app.use("/images", express.static("images"))

const PORT=process.env.PORT;
const CONNECTION=process.env.MONGODB_CONNECTION
mongoose
    .set('strictQuery', true)
    .connect(CONNECTION,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(
        app.listen(PORT, ()=>{
            console.log(`connected on port ${PORT}`)
        })
    )
    .catch((err)=>{
        console.log(err)
    }
)

app.get("/",(req,res)=>{
    res.send(`api is running on port ${PORT}`)
})

app.use("/event" , eventRoute);
app.use("/upload", imageRoute);