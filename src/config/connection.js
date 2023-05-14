const { Sequelize } = require('sequelize');
require('dotenv').config();

const db = new Sequelize({
    host: process.env.DB_HOST,
    port: 5432,
    database: process.env.DB_DEV_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dialect: 'postgres',
})

module.exports = db;