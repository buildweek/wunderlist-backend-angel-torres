const knex = require('knex');
const knexConfig = require('../knexfile');

const env = process.env.ENV || 'development';

const db = knex(knexConfig[env])

module.exports = db;