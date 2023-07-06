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

server.post('/books', (req, res) => {
    
})

module.exports = server;