const express = require('express')
const route = express.Router()
const recetteController = require('../controllers/recetteController')
// const middleware = require("../middleware/middleware");

route.get('/getall', recetteController.AllRecette);
route.get('/:id', recetteController.RecetteById);
route.post('/add', recetteController.AddRecette);//TODO: ajout de l'utilisateur connecté
route.get('/:id/commentaires', recetteController.GetCommentaires);
route.put('/:id/edit', recetteController.EditRecette);
route.delete('/:id/delete', recetteController.DeleteRecette);
// route.post('/:id/ajouterfavori', recetteController.AddFavori);
// route.delete('/:id/supprimerfavori', recetteController.DeleteFavori);
// route.post('/:id/commenter', recetteController.AddCommentaire);

module.exports = route