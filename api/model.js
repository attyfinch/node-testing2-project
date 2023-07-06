const db = require('../data/db-config')

function getAll() {
    return db('sfbooks')
}

function getById(id) {
    return db('sfbooks').where('id', id).first()
  }

module.exports = {
    getAll,
    getById
}