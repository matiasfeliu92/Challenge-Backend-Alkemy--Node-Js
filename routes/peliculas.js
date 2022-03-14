const express = require('express')
const router = express.Router()
const {Pelicula} = require('../database/db')

// busca todas las peliculas
router.get('/', (req, res)=>{
    Pelicula.findAll()
        .then(pelicula=>{
            res.json(pelicula)
        })
})

// busca solamente los titulos de las peliculas
router.get('/:titulo', (req, res)=>{
    Pelicula.findAll({attributes: ['titulo']})
        .then(pelicula=>{
            res.json(pelicula)
        })
})

// busca slamente los titulos y los ordena en forma ascendente
router.get('/', (req, res)=>{
    Pelicula.findAll({order: ['titulo', 'ASC']})
        .then(pelicula=>{
            res.json(pelicula)
        })
})

module.exports = router