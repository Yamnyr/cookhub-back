const Recette = require('../models/recetteModel')

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

