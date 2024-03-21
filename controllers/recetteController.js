const Recette = require('../models/recetteModel')
const Favoris = require("../models/favorisModel");
const Commentaire = require('../models/commentaireModel');
const Abonnement = require('../models/abonnementModel');
require('dotenv').config()
const jwt = require('jsonwebtoken');


const db = require('../database/database');
const { Op } = require('sequelize');

// (GET)
// http://localhost:8000/recette/getall
exports.AllRecette= async(req, res)=>{
    const recette = await Recette.findAll()
    res.status(200).json(recette)
}


// (GET) Afficher une recette spécifique
// http://localhost:8000/recette/getbyid/1
exports.RecetteById= async(req, res)=>{
    const recette = await Recette.findByPk(parseInt(req.params.id))
    res.status(200).json(recette)
}

// (GET) Afficher les recettes d'une région spécifique
// http://localhost:8000/recette/getbytype/:type
exports.RecetteByType = async (req, res) => {
    try {
        const recettes = await Recette.findAll({
            where: {
                id_typeplat: req.params.type
            }
        });
        res.status(200).json(recettes);
    } catch (error) {
        console.error("Erreur lors de la récupération des recettes par région :", error);
        res.status(500).json({ error: "Erreur lors de la récupération des recettes par région" });
    }
};


// (GET) Afficher les recettes d'une région spécifique
// http://localhost:8000/recette/getbyregion/:region
exports.RecetteByRegion = async (req, res) => {
    try {
        const recettes = await Recette.findAll({
            where: {
                id_region: req.params.region
            }
        });
        res.status(200).json(recettes);
    } catch (error) {
        console.error("Erreur lors de la récupération des recettes par région :", error);
        res.status(500).json({ error: "Erreur lors de la récupération des recettes par région" });
    }
};


// (GET) Afficher les recettes d'une région spécifique
// http://localhost:8000/recette/getbyutilisateur/:utilisateur
exports.RecetteByUtilisateur = async (req, res) => {
    try {
        const recettes = await Recette.findAll({
            where: {
                id_auteur: req.params.utilisateur
            }
        });
        res.status(200).json(recettes);
    } catch (error) {
        console.error("Erreur lors de la récupération des recettes par région :", error);
        res.status(500).json({ error: "Erreur lors de la récupération des recettes par région" });
    }
};



// (GET)
// http://localhost:8000/recette/2/commentaires
exports.GetCommentaires= async(req, res)=>{
    const recette = await Recette.findByPk(parseInt(req.params.id))
    let commentaires = await recette.getCommentaires()
    res.status(200).json(commentaires)
}

// (POST) Ajouter une nouvelle recette
// http://localhost:8000/recette/add

// {
//     "nom": "Salade César",
//     "preparation": "preparation..."
//     "ingrediants": {
//     "laitue": "1 tête",
//         "poulet grillé": "200g",
//         "croûtons": "1 tasse",
//         "parmesan": "50g",
//         "sauce César": "100ml"
// },
//     "id_typeplat": 2
//     "idRegion": 1
// }
exports.AddRecette = async (req, res) => {
    // Récupérer le token JWT du header de la requête
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: "Token manquant dans l'en-tête de la requête" });
    }

    // Décoder le token pour obtenir l'ID de l'utilisateur
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decodedToken.id;

    try {
        // Créer une nouvelle recette en incluant l'ID de l'auteur
        const nouvelleRecette = await Recette.create({
            ...req.body,
            id_auteur: userId
        });
        res.status(201).json(nouvelleRecette);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de l'ajout de la recette" });
    }
};
//TODO: il faut ajouté l'utilisateur connecté comme auteur


// (PUT) Modifier une recette existante
// http://localhost:8000/recette/:id/edit

// {
//     "nom": "Salade César",
//     "preparation": "preparation..."
//     "ingrediants": {
//         "laitue": "1 tête",
//         "poulet grillé": "200g",
//         "croûtons": "1 tasse",
//         "parmesan": "50g",
//         "sauce César": "100ml"
// },
//     "idTypeplat": 2,
//     "idRegion": 1
// }
exports.EditRecette = async (req, res) => {
    const { id } = req.params;
    try {
        const recette = await Recette.findByPk(id);
        if (!recette) {
            return res.status(404).json({ message: "Recette introuvable" });
        }

        // Récupérer le token JWT du header de la requête
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({ message: "Token manquant dans l'en-tête de la requête" });
        }

        // Décoder le token pour obtenir l'ID de l'utilisateur
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
        const userId = decodedToken.id;

        // Vérifier si l'utilisateur est l'auteur de la recette
        if (recette.id_auteur !== userId) {
            return res.status(403).json({ message: "Vous n'êtes pas autorisé à modifier cette recette" });
        }

        await recette.update(req.body);
        res.status(200).json(recette);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la modification de la recette" });
    }
};



// (DELETE) Supprimer une recette existante
// http://localhost:8000/recette/:id/delete
exports.DeleteRecette = async (req, res) => {
    // Récupérer le token JWT du header de la requête
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: "Token manquant dans l'en-tête de la requête" });
    }

    // Décoder le token pour obtenir l'ID de l'utilisateur
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decodedToken.id;

    const { id } = req.params;
    try {
        const recette = await Recette.findByPk(id);
        if (!recette) {
            return res.status(404).json({ message: "Recette introuvable" });
        }

        // Vérifier si l'utilisateur est l'auteur de la recette
        if (recette.id_auteur !== userId) {
            return res.status(403).json({ message: "Vous n'êtes pas autorisé à supprimer cette recette" });
        }

        await recette.destroy();
        res.status(204).end();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la suppression de la recette" });
    }
};

// (POST) Ajouter une recette aux favoris
// http://localhost:8000/recette/:id/favori
exports.AddToFavori = async (req, res) => {

    // Récupérer le token JWT du header de la requête
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: "Token manquant dans l'en-tête de la requête" });
    }

    // Décoder le token pour obtenir l'ID de l'utilisateur
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decodedToken.id;

    const recetteId = req.params.id; // Récupère l'ID de la recette à ajouter aux favoris

    try {
        // Vérifie si l'utilisateur a déjà ajouté cette recette à ses favoris
        const existingFavori = await Favoris.findOne({
            where: {
                id_utilisateur: userId,
                id_recette: recetteId
            }
        });

        if (existingFavori) {
            await existingFavori.destroy();
            return res.status(200).json({ message: "Recette retirée des favoris avec succès" });
        }

        // Ajoute la recette aux favoris de l'utilisateur
        await Favoris.create({
            id_utilisateur: userId,
            id_recette: recetteId
        });

        return res.status(200).json({ message: "Recette ajoutée aux favoris avec succès" });
    } catch (error) {
        console.error("Erreur lors de l'ajout de la recette aux favoris :", error);
        return res.status(500).json({ error: "Erreur lors de l'ajout de la recette aux favoris" });
    }
};


// (POST) Rechercher des recettes par ingrédients
// http://localhost:8000/recette/searchbyingredients
// {
//     "ingredients": {
//     "laitue": "1 tête"
// }
exports.RecetteByIngredients = async (req, res) => {
    const { ingredients } = req.body;
    try {
        // Convertir les ingrédients en un tableau de clés
        const keys = Object.keys(ingredients);

        // Rechercher les recettes qui contiennent tous les ingrédients spécifiés
        const recettes = await Recette.findAll({
            where: {
                ingrediants: {
                    [Op.and]: keys.map(key => ({
                        [key]: {
                            [Op.like]: `%${ingredients[key]}%`
                        }
                    }))
                }
            }
        });
        res.status(200).json(recettes);
    } catch (error) {
        console.error("Erreur lors de la recherche des recettes par ingrédients :", error);
        res.status(500).json({ error: "Erreur lors de la recherche des recettes par ingrédients" });
    }
};


// http://localhost:8000/recette/1/commenter
// {
//     "contenu": "Ceci est un nouveau commentaire sur la recette.",
//     "note": 2,
// }
exports.AddCommentaire = async (req, res) => {
    const { id } = req.params; // ID de la recette à commenter
    const { message, note } = req.body; // Contenu du commentaire

    // Récupérer le token JWT du header de la requête
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: "Token manquant dans l'en-tête de la requête" });
    }

    // Décoder le token pour obtenir l'ID de l'utilisateur
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decodedToken.id;

    try {
        // Créer le commentaire
        const commentaire = await Commentaire.create({
            message: message,
            note: note,
            id_utilisateur: userId,
            id_recette: id
        });

        res.status(201).json(commentaire);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de l'ajout du commentaire" });
    }
};


// http://localhost:8000/recette/follow
exports.RecettesFollow = async (req, res) => {
    try {

        // Récupérer le token JWT du header de la requête
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({ message: "Token manquant dans l'en-tête de la requête" });
        }

        // Décoder le token pour obtenir l'ID de l'utilisateur
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
        const userId = decodedToken.id;


        // Récupérer les IDs des utilisateurs suivis par l'utilisateur connecté
        const abonnements = await Abonnement.findAll({
            where: { id_abonne: userId },
            attributes: ['id_abonnement']
        });
        // Extraire les IDs des utilisateurs suivis
        const idsUtilisateursSuivis = abonnements.map(abonnement => abonnement.id_abonnement);

        console.error(idsUtilisateursSuivis);
        // Récupérer les recettes des utilisateurs suivis
        const recettesSuivies = await Recette.findAll({
            where: { id_auteur: idsUtilisateursSuivis }
        });

        console.error(idsUtilisateursSuivis);
        res.status(200).json(recettesSuivies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la récupération des recettes suivies" });
    }
};

// http://localhost:8000/recette/favoris

exports.RecetteInFavoris = async (req, res) => {
    try {
        // Récupérer le token JWT du header de la requête
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({ message: "Token manquant dans l'en-tête de la requête" });
        }

        // Décoder le token pour obtenir l'ID de l'utilisateur
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
        const userId = decodedToken.id;


        console.error(userId)
        // Récupérer les recettes favorites de l'utilisateur
        const favoris = await Favoris.findAll({
            where: { id_utilisateur: userId },
            include: [{ model: Recette }] // Inclure les détails des recettes favorites
        });

        res.status(200).json(favoris);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la récupération des recettes favorites de l'utilisateur" });
    }
};