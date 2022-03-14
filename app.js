const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()

const PORT = process.env.PORT || 4000

app.set('view engine', 'ejs')
app.use(morgan('dev'))

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use(express.static(__dirname + '/views'))

app.use('/disney/characters', require('./routes/personajes'))
app.use('/disney/movies', require('./routes/peliculas'))

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/disney`)
})