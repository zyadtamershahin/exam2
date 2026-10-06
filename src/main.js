import express from "express"
import {env} from "./config/env.service.js"
import { connection } from "./connection/connection.js"
import user_router from "./module/user/user.controller.js"
import booking_router from "./module/booking/booking.controller.js"
const app=express()
app.use(express.json())
app.use("/users", user_router)
app.use("/bookings", booking_router)

connection()
app.use((err,req,res,next)=>{
    console.log(err)
    let stack=env.mood==="dev" ? err.stack: null
   const status=err.cause?err.cause.status : 500
    res.status(status).json({message:err.message ,stack:stack})
})



app.listen(env.port,()=>{
    console.log(`app is running on port ${env.port}`)
})