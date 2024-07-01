const Sequelize = require('sequelize');
const seque = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_USER_PASSWORD, {
    host: process.env.MYSQL_HOST,
    dialect: "mysql",
});

const User = require('./model/model_User');
const Favorite = require('./model/model_Fav');

async function initUser()
{
    const UserModel = seque.models.User;
    const userStatus = !!UserModel;

    console.log('\n_______________________CHECK USER TABLE STATUS_______________________\n');
    if (!userStatus) {
        await User.sync();
        console.log('\nUser table created successfully.');
    } else {
        console.log('\nUser table already exists.');
    }
}

async function initFav()
{
    const FavoriteModel = seque.models.Favorite;
    const favStatus = !!FavoriteModel;

    console.log('\n_______________________CHECK FAVORITE TABLE STATUS_______________________\n');
    if (!favStatus) {
        await Favorite.sync();
        console.log('\nFavorite table created successfully.');
    } else {
        console.log('\nFavorite table already exists.');
    }
}

const initTable = async () => {
    console.log('\n=======================CHECK SPOTIFLYS DB STATUS=======================\n');
    try {
        await initUser();
        await initFav();
    } catch (error) {
        console.error('Error checking or creating User table:', error);
    }
};

module.exports = initTable;