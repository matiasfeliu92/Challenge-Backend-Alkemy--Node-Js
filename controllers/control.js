//const {Persona} = require('../database/db')
const control = {}

control.crearPers = (req, res) => {
    console.log(req.body)
    Persona.create({
        imagen: req.body,
        nombre: req.body,
        edad: req.body,
        peso: req.body,
        historia: req.body,
        peliculas: req.body
    }).then(personaje => {
        res.send('Un personaje ha sido creado') 
    })
}

module.exports = control