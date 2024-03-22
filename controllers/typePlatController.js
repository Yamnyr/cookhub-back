const TypePlat = require('../models/typeplatModel')
require('dotenv').config()

// (GET)
// http://localhost:8000/typePlat/getall
exports.AllTypePlat= async(req, res)=>{
    const typePlat = await TypePlat.findAll()
    res.status(200).json(typePlat)
}

// (GET) Afficher une recette spécifique
// http://localhost:8000/typeplat/getbyid/1
exports.typePlatById= async(req, res)=>{
    const type = await TypePlat.findByPk(parseInt(req.params.id))
    res.status(200).json(type)
}