const Sequelize = require('sequelize');
const configdb = require('../../config/db');

const UserModel = require('./tables/user');
const ProductModel = require('./tables/product');
const CatagoriesModel = require('./tables/catagories');


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
})


const User = UserModel(sequelize, Sequelize);
const Product = ProductModel(sequelize, Sequelize);
const Catagories = CatagoriesModel(sequelize, Sequelize);


// Product.belongsTo(Catagories);


// sequelize.sync({ force: true })
//     .then(() => {
//         console.log(`Database & tables created!`)
//     })

module.exports = {
    User,
    Product,
    Catagories
}