const express = require('express')
const router = express.Router()
//const control = require('../controllers/control')
const {Personaje} = require('../database/db')

router.get('/listaCharacters', (req, res)=>{
    Personaje.findAll()
        .then(personajes=>{
            res.json(personajes)
        })
})

router.get('/listaCharacters/:id', (req, res)=>{
    const id = req.params.id
    Personaje.findOne({where:{id: id}})
        .then(personaje=>{
            res.json(personaje)
        })
})

router.post('/crearCharacter', (req, res)=>{
    const persona = req.body
    Personaje.create({
        imagen: req.body.imagen,
        nombre: req.body.nombre,
        edad: req.body.edad,
        peso: req.body.peso,
        historia: req.body.historia,
        peliculas: req.body.peliculas
    }).then(personaje => {
        res.send('Un personaje ha sido creado')
    })
})

router.put('/actualizarCharacter/:id', (req, res)=>{
    const id = req.params.id
    const nuevosDatos = req.body
    Personaje.findOne({where:{id: id}}) 
        .then(personaje=>{
            personaje.update(nuevosDatos)
                .then(nuevaPersona=>{
                    res.json(nuevaPersona)
                })
        })
})

module.exports = router