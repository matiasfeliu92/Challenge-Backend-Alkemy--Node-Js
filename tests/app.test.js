const app = require('../app')
const request = require('supertest')
const { describe } = require('mocha')

//TESTEO DE ENDPOINT QUE DEVUELVE TODOS LOS PERSONAJES
describe("GET /disney/characters", () => {
    it('respond with json containing a list of Disney Characters', done => {
        request(app)
            .get('/disney/characters')
            .set('Accept', 'application/json')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200, done)
    })
})

//TESTEO DE ENDPOINT QUE DEVUELVE PERSONAJE POR ID
describe("GET /disney/characters/:id", () => {
    it('respond with json containing one character find by id', done => {
        request(app)
            .get('/disney/characters/4')
            .set('Accept', 'application/json')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200, done)
    })

    it('respond with json user not found', done => {
        request(app)
            .get("/disney/characters/23")
            .set('Accept', 'application/json')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(403)
            .expect('{"message":"no existe el personaje buscado"}')
            .end((err)=>{
                if(err) return done(err)
                done()
            })
    })
})

//TESTEO DE ENDPOINT QUE CREA UN PERSONAJE NUEVO
describe("POST /disney/characters/createCharacter", () => {
    it("respond with status 200", done=>{
        const data = {
            nombre: "abcdef",
            imagen: "www.falabella.com",
            edad: 67,
            peso: 89,
            historia: "c bc vc",
            peliculas: "vcxvcvc"
        }
        request(app)
            .post('/disney/characters/createCharacter')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200)
            .end((err)=>{
                if(err) return done(err)
                done()
            })
    })

    it('respond with status 403', done => {
        const data = {

        }
        request(app)
            .post('/disney/characters/createCharacter')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(403)
            .expect('error.parent.sqlMessage')
            .end((err)=>{
                if(err) return done(err)
                done()
            })
    })
})