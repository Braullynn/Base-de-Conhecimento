const config = require ('../knexfile.js')
const knex = require('knex')(config)

knex.migrate.latest([config]) // opção n recomendada para maiores sistemas
module.exports = knex