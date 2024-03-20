const sequelize = require('../database/database')
// const Commande = require('../models/commandeModel')
// const Modele = require('../models/modeleModel')
// const Option = require('../models/optionModel')
const Utilisateur = require('../models/utilisateurModel')
const Abonnement = require('../models/abonnementModel')
const Commentaire = require('../models/commentaireModel')
const Favoris = require('../models/favorisModel')
const Recette = require('../models/recetteModel')
const Typeplat = require('../models/typeplatModel')

exports.createAllTable = async(req, res)=>{
    await sequelize.sync()
    res.status(200).json('toutes les tables sont créer')
}

// exports.createTableModele = async(req, res)=>{
//     await Modele.sync()
//     res.status(200).json('table modele créer')
// }
//
// exports.createTableOption = async(req, res)=>{
//     await Option.sync()
//     res.status(200).json('table option créer')
// }
//
// exports.createTableCommande = async(req, res)=>{
//     await Commande.sync()
//     res.status(200).json('table commande créer')
// }
//
// exports.createTableUtilisateur = async(req, res)=>{
//     await Utilisateur.sync()
//     res.status(200).json('table utilisateur créer')
// }