module.exports = (sequelize, type) => {
    const Pelicula = sequelize.define('pelicula', {
        imagen: {
            type: type.STRING(1000)
        },
        titulo: {
            type: type.STRING
        },
        fechaDeCreacion: {
            type: type.STRING
        },
        calificacion: {
            type: type.INTEGER
        },
        personajesAsociados: {
            type: type.STRING
        }
    })
    return Pelicula
}