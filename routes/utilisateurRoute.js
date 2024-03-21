const express = require('express')
const route = express.Router()
const utilisateurController = require('../controllers/utilisateurController')
// const middleware = require("../middleware/middleware");


route.post('/login/', utilisateurController.login)
route.post('/register/', utilisateurController.register)

// route.post('/:utilisateur/suivre', utilisateurController.SuivreUtilisateur);

module.exports = route