const Books = require('./model')
const db = require('../data/db-config')

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})

beforeEach(async () => {
    await db.seed.run()
})

test('Environment is testing', () => {
    expect(process.env.NODE_ENV).toBe('testing')
})

describe('/Get All Books', () => {
   test('test name', async () => {
    const books = await Books.getAll();
    expect(books).toHaveLength(4)
   })
})

describe('get books by id', () => {
    test('get books by id', async () => {
        const dune = { id: 4, name: 'Dune'}
        let book = await Books.getById(4)
        expect(book).toMatchObject(dune) 
        
        const foundation = { id: 3, name: 'Foundation'}
        book = await Books.getById(3)
        expect(book).toMatchObject(foundation) 
    })
})

describe('[POST] insert new books', () => {
    const cat = { name: "Cat's Cradle" }
    test('Post request responds with new book', async () => {
        const newBook = await Books.insert(cat)
        expect(newBook).toMatchObject(cat)
    })
    test('New book is added to the table', async () => {
        await Books.insert(cat)
        const books = await Books.getAll()
        expect(books).toHaveLength(5)
    })
})

describe('[PUT] updating existing books', () => {
    const cat = { name: "incorrect title" }
    const updatedCat = { name: "Cat's Cradle"}
    test('Updates name of existing book', async () => {
        await Books.insert(cat)
        let book = await Books.getById(5)
        expect(book).toMatchObject(cat)

        await Books.update(5, updatedCat)
        book = await Books.getById(5)
        expect(book).toMatchObject(updatedCat)  
    })
})
