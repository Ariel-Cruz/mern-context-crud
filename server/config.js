import dotenv from "dotenv"

dotenv.config()
export const MONGODB_URI ="mongodb://localhost/postsdb"

export const PORT = process.env.PORT || 4000