import { bad_request_exception } from "../../common/exeptions.js"
import { booking_model } from "../../connection/model/booking.model.js"




export const booking = async (body) => {
    let { booking_date, tiltle } = body
    let existing_booking = await booking_model.findOne({ tiltle, booking_date })
    if (existing_booking) {
        return bad_request_exception({ message: "Booking already exists" })
    } else {
        let booking = await booking_model.create({ user_id, tiltle, booking_date, status })
        return { message: "Booking created successfully", booking }
    }
}

export const get_all_bookings = async () => {
    let bookings = await booking_model.find()
    if (bookings) {
        return { message: "Bookings fetched successfully", bookings }
    } else {
        return bad_request_exception({ message: "No bookings found" })
    }
}

export const get_bookings_by_id = async (id) => {
    let booking = await booking_model.findById(id).populate("user_id", "name","email")
    if (booking) {
        return { message: "Booking fetched successfully", booking }
    } else {
        return bad_request_exception({ message: "Booking not found" })
    }
}

export const update_booking = async (id, body) => {
    let booking = await booking_model.findByIdAndUpdate(id, body, { new: true })
    if (booking) {
        return { message: "Booking updated successfully", booking }
    } else {
        return bad_request_exception({ message: "Booking not found" })
    }
}

export const delete_booking = async (id) => {
    let booking = await booking_model.findByIdAndDelete(id)
    if (booking) {
        return { message: "Booking deleted successfully", booking }
    } else {
        return bad_request_exception({ message: "Booking not found" })
    }
}