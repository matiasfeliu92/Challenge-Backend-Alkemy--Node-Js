const {Personaje} = require('../database/db')
const control = {}

control.mostrarPers = async (req, res)=>{
    const personajes = await Personaje.findAll({attributes: ['id', 'imagen', 'nombre', 'historia']})
    if(personajes){
        // console.log(personajes)
        res.json(personajes)
    } else {
        res.json(403).json('no existen personajes')
    }
}

control.mostrarPersID = async (req, res)=>{
    const id = req.params.id
    const personaje = await Personaje.findOne({where:{id: id}})
    if(personaje){
        res.json(personaje)
        console.log(personaje)
    } else {
        res.status(403).json({message: 'no existe el personaje buscado'})
    }
}

control.crearPers = async (req, res)=>{
    try {
        const personaje = await Personaje.create(req.body)
        res.status(200).json(personaje)
    } catch (error) {
        res.status(403).json(error.parent.sqlMessage)
    }
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