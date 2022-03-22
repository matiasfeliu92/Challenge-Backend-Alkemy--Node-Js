const express = require('express')
const router = express.Router()
require('dotenv').config()
const jwt = require('jsonwebtoken')

router.get('/', (req, res)=>{
    return res.render('usuarios')
})

router.get('/signUp', (req, res)=>{
    return res.render('usuariosSignUp')
})

router.get('/signIn', (req, res)=>{
    return res.render('usuariosSignIn')
})

router.post('/register', (req, res)=>{
    //const id = req.body.id
    const email = req.body.email
    const password = req.body.password
    const privateKey = process.env.PRIVATEKEY
    const token = jwt.sign(email, password, privateKey, (err, result)=>{
        if(err){
            res.status(400).send({msg: 'Error, registro incorrecto'})
        }else{
            res.send({msg: 'Register success', token: result})
        }
    })
})

function verifyToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) return res.sendStatus(403);
    jwt.verify(token, "secret_key", (err, user) => {
       if (err) return res.sendStatus(404);
       req.user = user;
       next();
    });
 }

router.post('/login' , verifyToken , (req,res) => {
    res.send('You are Authorized!')
})

module.exports = router