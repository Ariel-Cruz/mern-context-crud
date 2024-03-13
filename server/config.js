import dotenv from "dotenv"

dotenv.config()
export const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://acruzo2025:acruzo2001@cluster0.lku587s.mongodb.net/cluster0?retryWrites=true&w=majority&appName=Cluster0"

export const PORT = process.env.PORT || 4000