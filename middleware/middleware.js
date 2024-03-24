const jwt = require('jsonwebtoken')
const db = require("../database/database");
const Utilisateur = require('../models/utilisateurModel')
require('dotenv').config()

exports.authenticator = (req, res, next)=>{
    const token = req.params.token ? req.params.token : req.headers.authorization
    console.log(token)
    if (token && process.env.SECRET_KEY){
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) =>{
            if(err){
                res.status(401).json({erreur: "accès refusé"})
            }
            else{
                console.log(decoded);
                next()
            }
        })
    }   else{
        res.status(401).json({erreur: "accès refusé"})
    }
}