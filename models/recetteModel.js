const sequelize = require('../database/database');
const { DataTypes } = require('sequelize');
const Utilisateur = require("./utilisateurModel");
const TypePlat = require("./typeplatModel")
const Region = require("./regionModel");

const Recette = sequelize.define('recette', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    nom: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: true
    },
    preparation: {
        type: DataTypes.TEXT,
        unique: false,
        allowNull: true
    },
    ingrediants: {
        type: DataTypes.JSON,
        unique: false,
        allowNull: true
    },
}, {
    sequelize,
    freezeTableName: true
});

//RELATION ICI:
Recette.belongsTo(Utilisateur, { foreignKey: 'id_auteur' }); // Utilisateur a la clé étrangère 'id_utilisateur'
Utilisateur.hasMany(Recette, { foreignKey: 'id_auteur' }); // Une commande appartient à un utilisateur

Recette.belongsTo(TypePlat, { foreignKey: 'id_typeplat' }); // La recette est associée à un type de plat
TypePlat.hasMany(Recette, { foreignKey: 'id_typeplat' }); // Un type de plat peut avoir plusieurs recettes

Recette.belongsTo(Region, { foreignKey: 'id_region' }); // La recette est associée à un type de plat
Region.hasMany(Recette, { foreignKey: 'id_region' }); // Un type de plat peut avoir plusieurs recettes

module.exports = Recette;
