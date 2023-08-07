const { Sequelize } = require("sequelize");
const favFunc = require("./models/Favorite");
const userFunc = require("./models/User");

// vuelve a descomentar esto cuando estes en local , vuelvo a comentarlo para que funcione en flyio
// require("dotenv").config();

// const { DB_USER, DB_PASSWORD, DB_HOST, DB_DB } = process.env;

// const database = new Sequelize(
//   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_DB}`,
//   { logging: false }
// );

const DATABASE_URL = process.env.DATABASE_URL;

const database = new Sequelize(DATABASE_URL)

favFunc(database);
userFunc(database);

console.log(process.env.SECRET)

//relacion de usuarios con favoritos es de n a n
const { User, Favorite } = database.models;
User.belongsToMany(Favorite, { through: "User_Favorite" });
Favorite.belongsToMany(User, { through: "User_Favorite" });

module.exports = {
  database,
  ...database.models,
};