const Sequelize = require('sequelize');
const seque = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_USER_PASSWORD, {
    host: process.env.MYSQL_HOST,
    dialect: "mysql",
});
console.log("coucou");

const connectDB = async () => {
    try {
        await seque.authenticate();
        console.log("DB mysql is connected !");
    } catch (error) {
        console.log(error);
        process.exit();
    }
};

module.exports = connectDB;