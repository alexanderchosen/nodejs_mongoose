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
            res.status(500).send(err)
        }
    )
})

// create a book 
bookRoute.post("/", (req, res)=>{
    const book2post = req.body
    console.log(book2post) // to test if it works

    // add the book to the bookstore database

    bookModel.create(book2post)
    .then(
        (book2post) =>{
            res.status(201).send({
                message: "Book successfully created",
                data: book2post
            })
        }
    ).catch(
        (err)=>{
            res.status(404).send(err)
        }
    )
    
})

// read a book by ID
bookRoute.get("/:id", (req, res)=>{
    const book2read = req.params.id
    console.log(book2read)
    // find and return this book by id

    bookModel.findById(book2read)
    .then(
        (book)=>{
            res.status(200).send({
                message: " Book FOund",
                data: book
            })
        }
    ).catch(
        (err)=>{
        res.status(400).send(err) // note that we are supposed to determine the status through each error log dynamically
        })
   
})

// update a book by ID
bookRoute.put("/:id", (req, res)=>{
    const book2Update = req.params.id
    const book = req.body

    // perform update to the database
    // to update by id, we need the id variable, the body we want to make update and the new option to indicate that the new changes should be displayed
    bookModel.findByIdAndUpdate(book2Update, book, {new: true})
    .then(
        (book)=>{
            res.status(200).send({
                message: " Book successfully Updated",
                data: book
            })
        }
    ).catch(
        (err)=>{
            res.status(400).send(err)
        }
    )

   
})

// delete a book with ID using a route ID
bookRoute.delete("/:id", (req, res)=>{
    const book2delete = req.params.id

    // perform delete operation to the database

    bookModel.findByIdAndDelete(book2delete)
    .then(
        ()=>{
            res.status(200).send({
                message: " Book successfully deleted",
                data: ""
            })
        }
    ).catch(
        (err)=>{
            res.status(404).send(err)
        })
    })



module.exports = bookRoute