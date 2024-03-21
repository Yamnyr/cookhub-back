const Utilisateur = require('../models/utilisateurModel')
const Abonnement = require('../models/abonnementModel')
const db = require('../database/database')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
require('dotenv').config();

// (POST)
// http://localhost:8000/utilisateur/register
// {
//     "nom": "test",
//     "prenom": "test",
//     "email": "test@user.gmail",
//     "mdp": "test"
// }
exports.register = async (req, res) => {
    const { nom, prenom, email, mdp } = req.body;
    try {
        const existingUser = await Utilisateur.findOne({
            where: {
                email: email
            }
        });

        if (existingUser) {
            return res.status(401).json({ error: "utilisateur déjà existant" });
        }

        const hashMDP = await bcrypt.hash(mdp, 10);

        const newUser = await Utilisateur.create({
            nom: nom,
            prenom: prenom,
            email: email,
            mdp: hashMDP,
        });

        const token = jwt.sign({ id: newUser.id }, process.env.SECRET_KEY, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de la requête" });
    }
};
// (POST)
// http://localhost:8000/utilisateur/login
// {
//     "email": "test@user.gmail",
//     "mdp": "test"
// }

exports.login = async (req, res) => {
    const { email, mdp } = req.body;
    try {
        const utilisateur = await Utilisateur.findOne({
            where: {
                email: email
            }
        });

        if (!utilisateur) {
            return res.status(401).json({ error: "utilisateur non existant" });
        }

        const samePwd = await bcrypt.compare(mdp, utilisateur.mdp);

        if (!samePwd) {
            return res.status(401).json({ error: "mdp incorrect" });
        }

        const token = jwt.sign({ id: utilisateur.id }, process.env.SECRET_KEY, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de la requête" });
    }
};


// http://localhost:8000/utilisateur/:utilisateur/suivre
exports.SuivreUtilisateur = async (req, res) => {

    // Récupérer le token JWT du header de la requête
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: "Token manquant dans l'en-tête de la requête" });
    }
    // Décoder le token pour obtenir l'ID de l'utilisateur
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decodedToken.id;

    const { utilisateur } = req.params; // ID de l'utilisateur à suivre

    try {
        // Vérifier si l'utilisateur à suivre existe
        const utilisateurSuivi = await Utilisateur.findByPk(utilisateur);
        if (!utilisateurSuivi) {
            return res.status(404).json({ message: "L'utilisateur à suivre n'existe pas" });
        }

        // Vérifier si l'utilisateur authentifié est déjà abonné à l'utilisateur à suivre
        const abonnementExistant = await Abonnement.findOne({
            where: {
                id_abonne: userId,
                id_abonnement: utilisateur
            }
        });
        if (abonnementExistant) {
            await abonnementExistant.destroy();
            return res.status(400).json({ message: "Vous ne suivez plus cet utilisateur" });
        }

        // Créer l'abonnement pour suivre l'utilisateur
        await Abonnement.create({
            id_abonne: userId,
            id_abonnement: utilisateur
        });

        res.status(200).json({ message: "Vous suivez maintenant cet utilisateur" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la tentative de suivi de l'utilisateur" });
    }
};
