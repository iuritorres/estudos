import app from "./index.js"
import dotenv from 'dotenv'

// routes
import './routes/products.js'

dotenv.config()
const port = process.env.SERVER_PORT

app.listen(port, () => {
    const date = new Date()
    console.log(`Server started at ${date}`)
})