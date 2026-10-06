import dotenv from "dotenv"
import path from "path"
dotenv.config({path:path.resolve('./.env.dev')})


const port= process.env.PORT
const database_uri= process.env.URI
const salt_rounds= process.env.SALT_ROUNDS
const mood= process.env.MOOD
const jwt_secret= process.env.JWT_SECRET
export const env = {
    port,
    database_uri,
    salt_rounds,
    mood,
    jwt_secret
}