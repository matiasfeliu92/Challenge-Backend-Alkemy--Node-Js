const express = require('express')
const router = express.Router()
const jwt = require('json-web-token')

router.post('/register', (req, res)=>{
    const id = req.body.id
    const email = req.body.email
    const password = req.body.password
    jwt.sign(id, 'secret_key', (err, token)=>{
        if(err){
            res.status(400).send({msg: 'Error, registro incorrecto'})
        }else{
            res.send({msg: 'Register success', token: token})
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