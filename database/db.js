const Sequelize = require('sequelize')
const dotenv = require('dotenv').config()

const personajeModel = require('../models/Personaje')
const peliculaModel = require('../models/PeliculaOSerie')
const generoModel = require('../models/Genero')
//const DBURL = 'mysql://root:@localhost:3306/disney'

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
})

const Personaje = personajeModel(sequelize, Sequelize)
const Pelicula = peliculaModel(sequelize, Sequelize)
const Genero = generoModel(sequelize, Sequelize)

sequelize.sync()
    .then(()=>{
        console.log('Tablas Creadas')
    })

    module.exports = {
        Personaje, Pelicula, Genero
    }