const sequelize = require('../database/database');
const { DataTypes} = require('sequelize');

const Typeplat = sequelize.define('typeplat', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    nom: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false
    },
}, {
    sequelize,
    freezeTableName: true
});

//RELATION ICI:

module.exports = Typeplat;
