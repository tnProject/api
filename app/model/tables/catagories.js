module.exports = (sequelize, type) => {
    return sequelize.define('catagories', {
        catagories_id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
           type: type.STRING,
           allowNull: false
        },
        description: type.STRING,
        createdAt: type.DATE,
        updatedAt: type.DATE
    })
}
