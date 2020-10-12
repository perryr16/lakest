const Sequelize = require('sequelize')

const database = new Sequelize({
  database: 'lakest',
  dialect: 'postgres',
  operatorsAliases: Sequelize.Op
})

const Trail = database.define('trail', {
  id: { type: Sequelize.STRING, primaryKey: true },
  trail: { type: Sequelize.JSONB, allowNull: false }
})


module.exports = {
  Trail,
  database
}
