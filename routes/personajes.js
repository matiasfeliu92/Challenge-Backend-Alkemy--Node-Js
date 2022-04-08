const express = require('express')
const router = express.Router()
//const control = require('../controllers/control')
const {Personaje} = require('../database/db')

// ruta que muestra la pagina de personajes
router.get('/', (req, res)=>{
    Personaje.findAll({attributes: ['imagen', 'nombre']})
        .then(personajes=>{
            res.render('personajes', {personajes: personajes})
            //res.json(personajes)
        })
})

router.get('/newChar', (req, res)=>{
    return res.render('formPersonaje')
})

// busca solamente el personaje por ID
router.get('/:id', (req, res)=>{
    const id = req.params.id
    Personaje.findOne({where:{id: id}})
        .then(personaje=>{
            res.json(personaje)
        })
})

// busca solamente el personaje por NOMBRE
router.get('/:nombre', (req, res)=>{
    const nombre = req.params.nombre
    Personaje.findOne({where:{nombre: nombre}})
        .then(personaje=>{
            res.json(personaje)
        })
})

// busca solamente el personaje por EDAD
router.get('/:edad', (req, res)=>{
    const edad = req.params.edad
    Personaje.findOne({where:{edad: edad}})
        .then(personaje=>{
            res.json(personaje)
        })
})

router.post('/createCharacter', (req, res)=>{
    const persona = req.body
    Personaje.create({
        imagen: req.body.imagen,
        nombre: req.body.nombre,
        edad: req.body.edad,
        peso: req.body.peso,
        historia: req.body.historia,
        peliculas: req.body.peliculas
    }).then(personaje => {
        //res.redirect('http://localhost:4000/disney/characters/')
        res.json(personaje)
    })
})

router.put('/updateCharacter/:id', (req, res)=>{
    const id = req.params.id
    const nuevosDatos = req.body
    Personaje.findOne({where:{id: id}}) 
        .then(personaje=>{
            personaje.update(nuevosDatos)
                .then(nuevaPersona=>{
                    if(nuevaPersona){
                        res.status(200).json({message: `El personaje con id ${id} ha sido actualizado`})
                    } else{
                        res.status(400).json({message: `El personaje no se pudo actualizar`})
                    }
                    
                })
        })
})

router.delete('/deleteCharacter/:id', (req, res)=>{
    const id = req.params.id
    Personaje.findOne({where:{id: id}}) 
        .then(personaje=>{
            personaje.destroy()
                .then(personaje=>{
                    if(personaje){
                        res.status(200).json({message: `El personaje con id ${id} ha sido eliminado`})
                    } else{
                        res.status(400).json({message: `El personaje no se pudo eliminar`})
                    }
                })
        })
})

module.exports = router