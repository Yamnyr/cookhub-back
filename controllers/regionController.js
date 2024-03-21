const Region = require('../models/regionModel')
require('dotenv').config()

// (GET)
// http://localhost:8000/region/getall
exports.AllRegion= async(req, res)=>{
    const recette = await Region.findAll()
    res.status(200).json(recette)
}
