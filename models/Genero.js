module.exports = (sequelize, type) => {
    const Genero = sequelize.define('genero', {
        nombre: {
            type: type.STRING,
            allowNull: false,
            unique: true
        },
        imagen: {
            type: type.STRING(1000)
        },
        peliculas: {
            type: type.STRING
        }
    })
    return Genero
}