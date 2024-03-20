const sequelize = require('../database/database');
const { DataTypes } = require('sequelize');

const Utilisateur = sequelize.define('utilisateur', {
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
    prenom: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    mdp: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: true
    },
    role: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
}, {
    sequelize,
    freezeTableName: true
});

//RELATION ICI:

module.exports = Utilisateur;
