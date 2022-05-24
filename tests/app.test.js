const app = require('../app')
const request = require('supertest')

describe("GET /disney/characters", () => {
    it('respond with json containing a list of Disney Characters', done => {
        request(app)
            .get('/disney/characters')
            .set('Accept', 'application/json')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200, done)
    })
})

describe("GET /disney/characters/:id", () => {
    it('respond with json containing one character find by id', done => {
        request(app)
            .get('/disney/characters/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200, done)
    })
})