const {Model, DataTypes} = require('sequelize');
const sequelize = require('../db');

class Music extends Model {} 
Music.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  link: {
    type: DataTypes.STRING,
    allowNull: false
  }
},{sequelize,modelName:'music'}) 

module.exports = Music;