import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()

const port = process.env.PORT
const uri = process.env.MONGODB_URI

// Mongoose
mongoose.connect(uri)
const connection = mongoose.connection
connection.on('Error', console.error.bind(console, 'MongoDB connection error:'));
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})
