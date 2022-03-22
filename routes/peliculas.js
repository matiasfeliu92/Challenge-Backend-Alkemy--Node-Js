const express = require('express')
const router = express.Router()
const {Pelicula} = require('../database/db')

// busca todas las peliculas
router.get('/', (req, res)=>{
    Pelicula.findAll()
        .then(pelicula=>{
            //res.render('peliculas', {pelicula: pelicula})
            res.json(pelicula)
        })
})

router.get('/newMovie', (req, res)=>{
    return res.render('formPeliculas')
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

router.post('/createMovie', (req, res)=>{
    Pelicula.create({
        imagen: req.body.imagen,
        titulo: req.body.titulo,
        fechaDeCreacion: req.body.fechaDeCreacion,
    }).then(pelicula => {
        //res.redirect('http://localhost:4000/disney/movies/')
        res.json(pelicula)
    })
})

module.exports = router