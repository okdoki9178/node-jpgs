const fs = require('fs')
const path = require('path')
const config = require('./config')
const Sequelize = require('sequelize')
const { database } = require('../config/database')

const sequelize = new Sequelize(
  process.env.DB_DATABASE || database.database, 
  process.env.DB_USER || database.username, 
  process.env.DB_PASSWORD || database.password,
  {
    host: process.env.DB_HOST || database.host,
    dialect: 'mysql'
  }
)

var db = {
  Jpgs: sequelize.import(path.join(__dirname, 'jpgs.js'))
}

fs.readdirSync(__dirname)
  .filter(function (file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js' && file !== 'config.js' && file !== 'info.json')
  })
  .forEach(function (file) {
    var model = sequelize['import'](path.join(__dirname, file))
    db[model.name] = model
  })
  
db.Jpgs.sync()

config.initAssociations(db)

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
