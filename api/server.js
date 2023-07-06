const express = require("express");

const Books = require('./model');

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.get("/books", (req, res) => {
    Books.getAll()
        .then(books => {
            res.status(200).json(books)
        })
        .catch(error => {
            console.error
        })
});

server.get("/books/:id", (req, res) => {
    Books.getById(req.params.id)
        .then(book => {
            res.status(200).json(book)
        })
        .catch(error => {
            console.error
        })
})

server.post('/books', async (req, res) => {
    try {
        const book = await Books.insert(req.body)
        res.status(201).json(book)
    } catch (err) {
        console.log(err)
    }
})

server.put('/books/:id', async (req, res) => {
    try {
        const { id } = req.params
        const updatedBook = await Books.update(id, req.body)
        res.status(200).json(updatedBook)
    } catch (error) {
        console.log(error)
    }
})

module.exports = server;