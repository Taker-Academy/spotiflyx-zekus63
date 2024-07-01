const Favorite = require("./model_Fav");
const Sequelize = require('sequelize');
const seque = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_USER_PASSWORD, {
    host: process.env.MYSQL_HOST,
    dialect: "mysql",
});

const userSchema = seque.define('User',
    {
        id: {
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false
        },
        email: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
        },
        firstName: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
        }
    }, {
        timestamps: true
    });

userSchema.hasOne(Favorite, { as: 'favorites' });

module.exports = userSchema;