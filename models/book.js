// in here, we have a definition of our model for books
// we use this to model a particular collection of our database

// step 1: import mongoose
const mongoose = require("mongoose")

// step 2: create/define a schema
const Schema = mongoose.Schema

// step 3: define a book schema
const BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    year:{
        type: Number,
        required: true,
        max: [2022, 'Year cannot be more than current year'] // the validators for year can be dynamic i.e read the current year value, use custom message
    },
    isbn:{
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price should be greater than 0'],
        max: ['$1000', 'Price should not exceed $1000']
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },

    updatedAt: {
        type: Date,
        default: Date.now
    }

})

// export your models by calling its collection name (books) and its schema (BookSchema)
// we use this schema in our routes to interact with our database
module.exports = mongoose.model("books", BookSchema)