const sequelize = require('../database/database');
const { DataTypes} = require('sequelize');
const Utilisateur = require("./utilisateurModel");

const Abonnement = sequelize.define('abonnement', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
}, {
    sequelize,
    freezeTableName: true
});

//RELATION ICI:

Abonnement.belongsTo(Utilisateur, { foreignKey: 'id_abonne', as: 'abonne' }); // L'abonné a la clé étrangère 'id_abonne'
Abonnement.belongsTo(Utilisateur, { foreignKey: 'id_abonnement', as: 'abonnement' }); // L'abonnement a la clé étrangère 'id_abonnement'

module.exports = Abonnement;
