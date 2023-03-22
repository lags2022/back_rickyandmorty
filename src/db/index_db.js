const { Sequelize } = require("sequelize");
const favFunc = require("./models/Favorite");

// vuelve a descomentar esto cuando estes en local , vuelvo a comentarlo para que funcione en flyio
require("dotenv").config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_DB } = process.env;

const database = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_DB}`,
  { logging: false }
);

// const DATABASE_URL=process.env.DATABASE_URL;

// const database = new Sequelize(DATABASE_URL)

favFunc(database);

console.log(database.models);

module.exports = {
  database,
  ...database.models,
};