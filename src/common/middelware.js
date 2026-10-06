
import jwt from "jsonwebtoken"


export const auth = (req, res, next) => {
    let [flag, token] = req.headers.authorization.split(" ")
    console.log(token)
    switch (flag) {
        case "basic":
            const basic_data = Buffer.from(token, "base64").toString()
            console.log(basic_data)
            let [email, password] = basic_data.split(":")
            console.log({email, password})
            break;
        case "bearer":
            let decoded=jwt.decoded(token)
            console.log(decoded)
        default:
            break;
}
}