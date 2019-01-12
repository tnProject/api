const Sequelize = require('sequelize');
const configdb = require('./../config/db');

var Singleton = (function () {
    var instance;

    function createInstance() {
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
        return sequelize;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

module.exports = Singleton;