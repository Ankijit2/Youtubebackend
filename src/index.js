import express from "express"
import dotenv from 'dotenv';
import ConnectDB from "./db/dbconnect.js"; 

dotenv.config({
    path: '../.env'
})


const PORT = process.env.PORT || 3000;
const app = express();

ConnectDB()

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})