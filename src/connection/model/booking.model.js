import mongoose from "mongoose";

const booking_schema = mongoose.Schema({
    user_id : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    },
    tiltle : {
        type : String,
        required : true
    },
    booking_date : {
        type : Date,
        required : true
    },
    status : {
        type : String,
        required : true
    }

})
export const booking_model = mongoose.model("booking", booking_schema)