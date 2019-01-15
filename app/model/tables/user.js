module.exports = (sequelize, type) => {
    return sequelize.define('users', {
        user_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: type.STRING,
            allowNull: false
        },
        email: {
            type: type.STRING,
            allowNull: false
        },
        phone: type.STRING,
        address: type.STRING,
        password: {
            type: type.STRING,
            allowNull: false
        },
        createdAt: type.DATE,
        updatedAt: type.DATE 
    })
}