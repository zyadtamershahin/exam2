import jwt from "jsonwebtoken"
import { env } from "../config/env.service.js"



export const generate_token = (user) => {
            let token = jwt.sign({ id: user._id }, env.jwt_secret, { expiresIn: "30min" })
            return token
}