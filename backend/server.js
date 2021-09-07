import express from "express"
import cors from "cors"
import usersRouter from "./routes/users.route.js"

const app = express()

app.use(cors())
app.use(express.json())

//const usersRouter = require('./routes/users.route');
app.use("/api/v1/users", usersRouter)
app.use("*", (req, res) => res.status(404).json({ error: "Not Found" }))

export default app