const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('mysql://root:ElsaRoseyButterScotch@localhost:3306/music_db')

module.exports = sequelize
