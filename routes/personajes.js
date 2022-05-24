const express = require('express')
const router = express.Router()
const cors = require('cors');
const control = require('../controllers/control')
const {Personaje} = require('../database/db')

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// ruta que muestra la pagina de personajes
router.get('/', cors(corsOptions), control.mostrarPers)

// busca solamente el personaje por ID
router.get('/:id', cors(corsOptions), control.mostrarPersID)

router.post('/createCharacter', cors(corsOptions), control.crearPers)

router.put('/updateCharacter/:id', cors(corsOptions), control.actualizarPers)

router.delete('/deleteCharacter/:id', cors(corsOptions), control.eliminarPers)

module.exports = router