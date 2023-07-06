const db = require('../data/db-config')

function getAll() {
    return db('sfbooks')
}

function getById(id) {
    return db('sfbooks').where('id', id).first()
}

async function insert(book) {
    return await db('sfbooks').insert(book).then(([id]) => {
        return db('sfbooks').where('id', id).first()
      })
}

async function update(id, book) {
    await db('sfbooks').update(book).where('id', id)
    return db('sfbooks').where('id', id).first()
}

module.exports = {
    getAll,
    getById,
    insert,
    update
}