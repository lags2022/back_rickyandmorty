const { Sequelize } = require("sequelize");
const favFunc = require("./models/Favorite");
// require("dotenv").config();

// const { DB_USER, DB_PASSWORD, DB_HOST, DB_DB } = process.env;

// `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_DB}`,
const DATABASE_URL=process.env.DATABASE_URL;

const database = new Sequelize(DATABASE_URL)
  // { logging: false }

favFunc(database);

// console.log(database.models);

module.exports = {
  database,
  ...database.models,
};