const express = require('express')
const route = express.Router()
const utilisateurController = require('../controllers/utilisateurController')
const recetteController = require("../controllers/recetteController");
// const middleware = require("../middleware/middleware");


route.post('/login/', utilisateurController.login)
route.post('/register/', utilisateurController.register)


route.get('/getbyid/:id', utilisateurController.UtilisateurById);
route.get('/:utilisateur/suivre', utilisateurController.SuivreUtilisateur);

module.exports = route