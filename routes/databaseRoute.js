const express = require('express')
const route = express.Router()
const databaseController = require('../controllers/databaseController')

route.get('/createAllTable', databaseController.createAllTable)
// route.get('/createTableModele', databaseController.createTableModele)
// route.get('/createTableOption', databaseController.createTableOption)

module.exports = route