module.exports = (sequelize, type) => {
    const Persona = sequelize.define('personaje', {
        imagen: {
            type: type.STRING(1000) 
        },
        nombre: {
            type: type.STRING,
            allowNull: false
        },
        edad: {
            type: type.INTEGER
        },
        peso: {
            type: type.INTEGER
        },
        historia: {
            type: type.STRING
        },
        peliculas: {
            type: type.STRING
        }
    })
    return Persona
}