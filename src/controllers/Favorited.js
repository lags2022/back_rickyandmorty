const { Favorite } = require("../db/index_db");

const getFavPg = async () => {
  const favorites = await Favorite.findAll();
  return favorites;
};

const createFavPg = async (data) => {
  const createFavs = await Favorite.create(data);
  return createFavs;
};

const deleteFavorites = async (id) => {
  const deletfav = await Favorite.findByPk(id);
  if (!deletfav) return {};
  await deletfav.destroy();
  return deletfav;
};

const resetFavorites = async () => {
  await Favorite.destroy({ where: {} }); // para borrar todos los elementos de una tabla.
  return await Favorite.findAll();
};

module.exports = {
  deleteFavorites,
  resetFavorites,
  getFavPg,
  createFavPg,
};
