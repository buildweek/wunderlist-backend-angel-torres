const knex = require('knex');
const knexConfig = require('../knexfile');

const env = process.env.DB_ENV || 'development';

const db = knex(knexConfig[env])

module.exports = db;