import mongoose from "mongoose";
import { gender_enum,role_enum } from "../../common/enum.js";



const user_schema = mongoose.Schema({
    name : {
        type : String,
        required : true,
        min : 20
    },
    email : {
        type : String,
        required : true,
        Unique : true
    },
    password :{
        type : String,
        required : true,
        min : 8
    },
    gender : {
        type : Number,
        required : true,
        default : gender_enum.male
    }, 
    role : {
        type : Number,
        required : true,
        default : role_enum.user
    }
})
export const user_model = mongoose.model("user",user_schema)