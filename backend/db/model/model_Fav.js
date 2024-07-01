const Sequelize = require('sequelize');
const seque = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_USER_PASSWORD, {
    host: process.env.MYSQL_HOST,
    dialect: "mysql",
});

const favSchema = seque.define('Favorite',
{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    type: { 
        type: Sequelize.ENUM('video', 'music'),
        allowNull: false
    },
    url: {
        type: Sequelize.STRING,
        allowNull: false
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = favSchema;