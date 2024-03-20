const sequelize = require('../database/database');
const { DataTypes} = require('sequelize');
const Utilisateur = require("./utilisateurModel");
const Recette = require("./recetteModel");

const Favoris = sequelize.define('favoris', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    }
}, {
    sequelize,
    freezeTableName: true
});

//RELATION ICI:
// Favoris.belongsToMany(Utilisateur, {through: "option_model"})
// Utilisateur.belongsToMany(Favoris, {through: "option_model"})

Favoris.belongsTo(Utilisateur, { foreignKey: 'id_utilisateur' }); // Un favori appartient à un utilisateur
Utilisateur.hasMany(Favoris, { foreignKey: 'id_utilisateur' }); // Un utilisateur peut avoir plusieurs favoris

Favoris.belongsTo(Recette, { foreignKey: 'id_recette' }); // Un favori est associé à une recette
Recette.hasMany(Favoris, { foreignKey: 'id_recette' }); // Une recette peut avoir plusieurs favoris

module.exports = Favoris;
