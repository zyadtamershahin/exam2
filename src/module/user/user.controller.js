import { Router } from "express";
import { get_user, login, signup } from "./user.service.js";
import { auth } from "../../common/middelware.js";

const router= Router()
router.post("/signup",async (req,res)=>{
    const data = await signup(req.body)
    res.json(data) 
})
router.get("/get-user",async (req,res)=>{
    const data = await get_user(req.body)
    res.json(data) 
})
router.post("/login",auth,async (req,res)=>{
    const data = await login(req.body)
    res.json(data) 
})


export default router