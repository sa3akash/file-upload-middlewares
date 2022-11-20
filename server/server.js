const express = require('express')
const router = require("./routes")
const cors = require('cors')
const path = require('path')

const app = express()

// global root
global.appRoot = path.resolve(__dirname);


app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/api", router)



app.use((error,req,res,next)=>{
    const errorStatus = error.status || 500;
    const errorMessage = error.message ||"This is server side error";

    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: error.stack
    });
})
app.listen(5500,()=>console.log("server running on port 5500"))
