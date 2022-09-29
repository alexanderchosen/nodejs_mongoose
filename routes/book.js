const express = require("express")
const bookModel = require("../models/book")

const bookRoute = express.Router()

// CRUD route -- create, read, update and delete

// read route
bookRoute.get("/", (req, res)=>{
    // return all books
    bookModel.find({})
    .then(
        (books)=>{
            res.status(200).send(books)
        }
    ).catch(
        (err) =>{
            console.log(err)
            res.status(500).send(err.message)
        }
    )
})

// create a book 
bookRoute.post("/", (req, res)=>{
    const book2post = req.body
    console.log(book2post) // to test if it works

    // add the book to the bookstore database

    res.send(" Book successfully created")
})

// read a book by ID
bookRoute.get("/:id", (req, res)=>{
    const book2read = req.params.id
    console.log(book2read)
    // find and return this book by id

    res.send("Book successfully displayed from its ID")

})

// update a book by ID
bookRoute.put("/:id", (req, res)=>{
    const book2Update = req.params.id
    console.log("Updating book with " + book2Update)

    // perform update to the database

    res.send("Book was successfully updated")
})

// delete a book with ID using a route ID
bookRoute.delete("/:id", (req, res)=>{
    const book2delete = req.params.id
    console.log(`deleting book with ${book2delete}`)

    // perform delete operation to the database

    res.send("Book was successfully deleted")
})



module.exports = bookRoute