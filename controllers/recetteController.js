const Recette = require('../models/recetteModel')
const Favoris = require("../models/favorisModel");

const db = require('../database/database');

// (GET)
// http://localhost:8000/recette/getall
exports.AllRecette= async(req, res)=>{
    const recette = await Recette.findAll()
    res.status(200).json(recette)
}


// (GET) Afficher une recette spécifique
// http://localhost:8000/recette/:id
exports.RecetteById= async(req, res)=>{
    const recette = await Recette.findByPk(parseInt(req.params.id))
    res.status(200).json(recette)
}


// (GET)
// http://localhost:8000/recette/2/commentaires
exports.GetCommentaires= async(req, res)=>{
    const modele = await Recette.findByPk(parseInt(req.params.id))
    let commentaires = await modele.getCommentaires()
    res.status(200).json(commentaires)
}

// (POST) Ajouter une nouvelle recette
// http://localhost:8000/recette/add

// {
//     "nom": "Salade César",
//     "ingrediants": {
//     "laitue": "1 tête",
//         "poulet grillé": "200g",
//         "croûtons": "1 tasse",
//         "parmesan": "50g",
//         "sauce César": "100ml"
// },
//     "idAuteur": 1,
//     "idTypeplat": 2
// }
exports.AddRecette = async (req, res) => {
    try {
        const nouvelleRecette = await Recette.create(req.body);
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
//     "ingrediants": {
//     "laitue": "1 tête",
//         "poulet grillé": "200g",
//         "croûtons": "1 tasse",
//         "parmesan": "50g",
//         "sauce César": "100ml"
// },
//     "idAuteur": 1,
//     "idTypeplat": 2
// }
exports.EditRecette = async (req, res) => {
    const { id } = req.params;
    try {
        const recette = await Recette.findByPk(id);
        if (!recette) {
            return res.status(404).json({ message: "Recette introuvable" });
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
    const { id } = req.params;
    try {
        const recette = await Recette.findByPk(id);
        if (!recette) {
            return res.status(404).json({ message: "Recette introuvable" });
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
    const { utilisateur_id, recette_id } = req.body;

    try {
        // Vérifie si l'utilisateur a déjà ajouté cette recette à ses favoris
        const existingFavori = await Favoris.findOne({
            where: {
                id_utilisateur: utilisateur_id,
                id_recette: recette_id
            }
        });

        if (existingFavori) {
            return res.status(400).json({ error: "La recette est déjà dans les favoris de l'utilisateur" });
        }

        // Ajoute la recette aux favoris de l'utilisateur
        await Favoris.create({
            id_utilisateur: utilisateur_id,
            id_recette: recette_id
        });


        return res.status(200).json({ message: "Recette ajoutée aux favoris avec succès" });
    } catch (error) {
        console.error("Erreur lors de l'ajout de la recette aux favoris :", error);
        return res.status(500).json({ error: "Erreur lors de l'ajout de la recette aux favoris" });
    }
};

