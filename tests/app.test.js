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
