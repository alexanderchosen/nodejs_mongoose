// require both express and dotenv
const express = require ("express")
const { connectToMongoDb } = require("./db")
const BookRoute = require ("./routes/book")
require("dotenv").config()



// port is already defined in the .env file 
const PORT = process.env.PORT

// define express and assign to a const variable
const app = express()

// connect to mongoDB instance
connectToMongoDb()

// express in-built body parser
app.use(express.json())

// to connect to the book route
app.use("/books", BookRoute)

// define our home route
app.get("/", (req, res)=>{
    res.send("Welcome Home!")
})

// listen to the server and check if running
app.listen(PORT, ()=>{
    console.log(`Server started on PORT: http://localhost:${PORT}`)
})
