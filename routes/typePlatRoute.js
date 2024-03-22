const express = require('express')
const route = express.Router()
const typePlatController = require('../controllers/typePlatController')
const middleware = require("../middleware/middleware");

route.get('/getall', typePlatController.AllTypePlat);
route.get('/getbyid/:id', typePlatController.typePlatById);


module.exports = route