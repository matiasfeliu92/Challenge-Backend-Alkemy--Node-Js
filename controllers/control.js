const {Personaje} = require('../database/db')
const control = {}

control.mostrarPers = (req, res)=>{
    Personaje.findAll({attributes: ['imagen', 'nombre', 'historia']})
        .then(personajes=>{
            res.json(personajes)
        })
}

control.mostrarPersID = (req, res)=>{
    const id = req.params.id
    Personaje.findOne({where:{id: id}})
        .then(personaje=>{
            res.json(personaje)
        })
}

control.crearPers = (req, res)=>{
    const persona = req.body
    Personaje.create({
        imagen: req.body.imagen,
        nombre: req.body.nombre,
        edad: req.body.edad,
        peso: req.body.peso,
        historia: req.body.historia,
        peliculas: req.body.peliculas
    })
    .then((personaje) => {
        res.json(personaje)
    })
}

control.actualizarPers = (req, res)=>{
    const id = req.params.id
    const nuevosDatos = req.body
    Personaje.findOne({where:{id: id}}) 
        .then(personaje=>{
            personaje.update(nuevosDatos)
                .then(nuevaPersona=>{
                    res.json(nuevaPersona)
                })
        })
}

control.eliminarPers = (req, res)=>{
    const id = req.params.id
    Personaje.findOne({where:{id: id}}) 
        .then(personaje=>{
            personaje.destroy()
                .then(personaje=>{
                    res.json(personaje)
                })
        })
}

module.exports = control