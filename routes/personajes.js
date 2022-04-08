const express = require('express')
const router = express.Router()
const control = require('../controllers/control')
const {Personaje} = require('../database/db')

// ruta que muestra la pagina de personajes
router.get('/', control.mostrarPers)

// busca solamente el personaje por ID
router.get('/:id', control.mostrarPersID)

router.post('/createCharacter', control.crearPers)

router.put('/updateCharacter/:id', control.actualizarPers)

router.delete('/deleteCharacter/:id', control.eliminarPers)

module.exports = router