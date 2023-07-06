const Books = require('./model')
const db = require('../data/db-config')


test('Environment is testing', () => {
    expect(process.env.NODE_ENV).toBe('testing')
})

describe('/ TEST', () => {
   
})