const express = require("express")
require("dotenv").config()
const app = express()
app.use(express.json())

const userRouter = require('./routes/users')
const port = process.env.port || 4040

app.use(userRouter)

app.listen(port, () => {
    console.log(`server is working on ${port} port`);
})