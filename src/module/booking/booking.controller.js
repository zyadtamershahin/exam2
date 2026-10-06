import Router from "express";
import { booking, delete_booking, get_all_bookings, get_bookings_by_id, update_booking } from "./booking.service.js";


const router = Router()

router.post("/bookings", async (req, res) => {
    const data = await booking(req.body)
    res.json(data)
})

router.get("/get-all-bookings/:id", async (req, res) => {
    const data = await get_bookings_by_id(req.params.id)
    res.json(data)
})

router.get("/get-all-bookings", async (req, res) => {
    const data = await get_all_bookings()
    res.json(data)
})

router.put("/update-booking/:id", async (req, res) => {
    const data = await update_booking(req.params.id, req.body)
    res.json(data)
})

router.delete("/delete-booking/:id", async (req, res) => {
    const data = await delete_booking(req.params.id)
    res.json(data)
})


export default router