const express = require('express')
const route = express.Router()
const recetteController = require('../controllers/recetteController')
const middleware = require("../middleware/middleware");

route.get('/getall', recetteController.AllRecette);
route.get('/getbyid/:id', recetteController.RecetteById);
route.get('/getbytype/:type', recetteController.RecetteByType);
route.get('/getbyregion/:region', recetteController.RecetteByRegion);
route.get('/getbyutilisateur/:utilisateur', recetteController.RecetteByUtilisateur);
route.get('/getmyrecette/', recetteController.MyRecette);
route.get('/:id/commentaires', recetteController.GetCommentaires);
route.post('/searchbyingredients', recetteController.RecetteByIngredients);
route.post('/add', middleware.authenticator, recetteController.AddRecette);//TODO: ajout de l'utilisateur connecté
route.put('/:id/edit', middleware.authenticator, recetteController.EditRecette);
route.delete('/:id/delete', middleware.authenticator, recetteController.DeleteRecette);
route.get('/:id/favori', middleware.authenticator, recetteController.AddToFavori);
route.get('/favoris', middleware.authenticator, recetteController.RecetteInFavoris);

route.get('/follow', middleware.authenticator, recetteController.RecettesFollow);

//recetten favoris



route.post('/:id/commenter', recetteController.AddCommentaire);

module.exports = route