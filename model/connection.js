const Sequelize = require('sequelize');
const configdb = require('./../config/db');

const sequelize = new Sequelize(configdb.database, configdb.username, configdb.password, {
    host: configdb.host,
    dialect: configdb.dialect,
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    logging: configdb.logging
});

module.exports = sequelize;
