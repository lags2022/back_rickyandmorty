const { Favorite } = require("../db/index_db");
// let fav = [];

const getFavPg = async () => {
  const favorites = await Favorite.findAll();
  return favorites;
};

const createFavPg = async (data) => {
  const createFavs = await Favorite.create(data);
  return createFavs;
};

// const postFavorites = (id, name, image, gender) => {
//   const addFav = {
//     id,
//     name,
//     image,
//     gender,
//   };
//   fav.push(addFav);
//   return addFav;
// };

const deleteFavorites = async (id) => {
  const deletfav = await Favorite.findByPk(id);
  // if (!deletfav) throw new Error("favorite not found");
  await deletfav.destroy();
  return deletfav;
};

const resetFavorites = async () => {
  await Favorite.destroy({ where: {} });// para borrar todos los elementos de una tabla.
  return await Favorite.findAll();
};

// const getFavorites = () => {
//   return fav;
// };

module.exports = {
  // getFavorites,
  // postFavorites,
  deleteFavorites,
  resetFavorites,
  getFavPg,
  createFavPg,
};
