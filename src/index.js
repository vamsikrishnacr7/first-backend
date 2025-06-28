import dotenv from "dotenv"
import connectDB from "./db/index.js"
import {app} from "./app.js"

dotenv.config({
    path: "./.env"
})

const port = process.env.PORT || 5500
connectDB()
.then( () => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    })
})
.catch((err) => {
    console.error("Failed to connect to the database: ", err)
})

