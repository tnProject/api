
module.exports = (sequelize, type) => {
    return sequelize.define('product', {
        product_id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
           type: type.STRING,
           allowNull: false
        },
        price: type.DECIMAL,
        description: type.STRING,
        image_link: type.STRING,
        createdAt: type.DATE,
        updatedAt: type.DATE
    })
}


