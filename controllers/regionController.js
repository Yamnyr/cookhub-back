const Region = require('../models/regionModel')
require('dotenv').config()

// (GET)
// http://localhost:8000/region/getall
exports.AllRegion= async(req, res)=>{
    const recette = await Region.findAll()
    res.status(200).json(recette)
}

// (GET) Afficher une recette spécifique
// http://localhost:8000/region/getbyid/1
exports.RegionById= async(req, res)=>{
    const region = await Region.findByPk(parseInt(req.params.id))
    res.status(200).json(region)
}