const db = require('../data/db-config')
const request = require('supertest')
const server = require('./server')

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})

beforeEach(async () => {
    await db.seed.run()
})

describe('[GET]', () => {
    test('Get all books returns 200 response', async () => {
        const res = await request(server).get('/books')
        expect(res.status).toBe(200)
    })
    test('Get books response contains correct # of books', async () => {
        const res = await request(server).get('/books')
        expect(res.body).toHaveLength(4)
    })

    test('Get books by id', async () => {
        let res = await request(server).get('/books/1')
        expect(res.body).toMatchObject({ id: 1, name: "The Moon is a Harsh Mistress"})
        
        res = await request(server).get('/books/4')
        expect(res.body).toMatchObject({ id: 4, name: "Dune"})
    })
})

describe('[POST]', () => {
    const book = { name: "Slaughterhouse Five" }
    test('Adds book to db', async () => {
        await request(server).post('/books').send(book)
        const res = await request(server).get('/books')
        expect(res.body).toHaveLength(5)
    })
    test('Responds with new book', async () => {
        const res = await request(server).post('/books').send(book)
        expect(res.body).toMatchObject(book)
        expect(res.status).toBe(201)
    })
})

describe('[PUT]', () => {
    const book = { name: "Slaughterhouse Five" }
    const updatedBook = { name: "Cat's Cradle"}
    test('Correctly updates book in db', async () => {
        let res = await request(server).post('/books').send(book)
        expect(res.body).toMatchObject(book)

        res = await request(server).get('/books/5')
        expect(res.body).toMatchObject(book)
        console.log(res.body)

        res = await request(server).put('/books/5').send(updatedBook)
        
        res = await request(server).get('/books/5')
        expect(res.body).toMatchObject(updatedBook)
    })
})