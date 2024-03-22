const express = require('express')
const route = express.Router()
const regionController = require('../controllers/regionController')
const middleware = require("../middleware/middleware");

route.get('/getall', regionController.AllRegion);
route.get('/getbyid/:id', regionController.RegionById);


module.exports = route