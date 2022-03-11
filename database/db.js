const Sequelize = require('sequelize')

const personajeModel = require('../models/Personaje')
const peliculaModel = require('../models/PeliculaOSerie')
const generoModel = require('../models/Genero')
const DBURL = 'mysql://root:@localhost:3306/disney'

const sequelize = new Sequelize(DBURL)

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