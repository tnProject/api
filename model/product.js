const Sequelize = require('sequelize');

module.exports = function (sequelize){
    return sequelize.define('products', {
        product_id: Sequelize.INTEGER,
        name: Sequelize.STRING,
        price: Sequelize.DECIMAL,
        description: Sequelize.STRING,
        image_link: Sequelize.STRING
    });
}
