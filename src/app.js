import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// for config of json and url type request/form
app.use(express.json({limit: "15kb"}))
app.use(express.urlencoded({extended: true, limit: "15kb"}))

// for storing public assets like images and fevicon
app.use(express.static("public"))
app.use(cookieParser()) 


// router import
import userRouter from "./routes/user.routes.js"


// router declaration
app.use("/api/v1/users", userRouter)
// http://localhost:8000/api/v1/users/register

export { app } 


// here it is necessary to use middleware to access router as we have write all functioning separately.
// So we used app.use() instead of app.get() done previously