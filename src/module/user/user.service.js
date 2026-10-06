import bcrypt from "bcrypt"
import { not_found_exception } from "../../common/index.js"
import { generate_token } from "../../common/token.service.js"
import { user_model } from "../../connection/model/user.model.js"
import { env } from "../../config/env.service.js"


export const get_user = async (body) => {
    let { email } = body
    let user = await user_model.findOne({ email })
    if (!user) {
        return not_found_exception({message:"User not found"})
    }
    return user
}

export const signup = async (body) => {
    let { name, email, password, gender } = body
    let existing_user = await user_model.findOne({ email })
    if (existing_user) {
        return bad_request_exception({ message: "User already exists" })
    } else {
        let hashed_password = await bcrypt.hash(password, env.salt_rounds)
        let user = await user_model.create({ name, email, password: hashed_password, gender})
        return { message: "User created successfully", user }
    }

}

export const login = async (body) => {
    let { email, password } = body
    let user = await user_model.findOne({ email })
    if (user) {
        let isMatch = await bcrypt.compare(password, user.password)
        if (isMatch) {
            const data = generate_token(user)
            return { message: "login successful",  data }
        }
            else {
               return not_found_exception({message:"Invalid password"})
            }
    }
}