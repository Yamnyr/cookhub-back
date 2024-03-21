const sequelize = require('../database/database');
const { DataTypes} = require('sequelize');
const Utilisateur = require("./utilisateurModel");
const Recette = require("./recetteModel");

const Commentaire = sequelize.define('commentaire', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    message:{
        type: DataTypes.TEXT,
        unique: false,
        allowNull: true
    },
    note:{
        type: DataTypes.INTEGER,
        unique: false,
        allowNull: true
    }
}, {
    sequelize,
    freezeTableName: true
});

//RELATION ICI:
Commentaire.belongsTo(Utilisateur, { foreignKey: 'id_utilisateur' }); // Le commentaire appartient à un utilisateur
Utilisateur.hasMany(Commentaire, { foreignKey: 'id_utilisateur' });  // Un utilisateur peut avoir plusieurs commentaires

// Relation entre le commentaire et la recette à laquelle il est associé
Commentaire.belongsTo(Recette, { foreignKey: 'id_recette' }); // Le commentaire appartient à une recette
Recette.hasMany(Commentaire, { foreignKey: 'id_recette' });  // Une recette peut avoir plusieurs commentaires

module.exports = Commentaire;
