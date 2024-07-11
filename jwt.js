const jwt = require('jsonwebtoken')
const secret='SureshJwtSecret'

function setUser(user){
    return jwt.sign(user, secret)
}

var token = setUser(user)
res.cookie('uuid',token)

function getUser(tokenFromFrontend){
    return jwt.verify(tokenFromFrontend, secret)
}