
let db = {
    database: 'mydb',
    username: 'root',
    password: '12345678x@X',
    host: 'localhost',
    dialect: 'mysql',
};

if (process.env.NODE_ENV == 'test'){
    db.dialect = 'sqlite';
    db.storage = '../test/storage/database.sqlite';
    db.logging = false;
}

module.exports = db;
