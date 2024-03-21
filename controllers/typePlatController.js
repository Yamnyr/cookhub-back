const TypePlat = require('../models/typeplatModel')
require('dotenv').config()

// (GET)
// http://localhost:8000/typePlat/getall
exports.AllTypePlat= async(req, res)=>{
    const typePlat = await TypePlat.findAll()
    res.status(200).json(typePlat)
}
