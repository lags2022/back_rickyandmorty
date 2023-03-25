const { Favorite, User } = require("../db/index_db");

const getFavPg = async (idUser) => {
  const user = await User.findByPk(idUser);
  const favorites = await user.getFavorites();
  return favorites;
};

const createFavPg = async ({ id, name, image, gender, idUser }) => {
  const user = await User.findOne({ where: { id: idUser } });
  if (!user) throw new Error("User not found, favorited not assigned");
  const [fav, boo] = await Favorite.findOrCreate({
    where: { id },
    defaults: {
      id,
      name,
      image,
      gender,
    },
  });
  await fav.addUser(idUser);
  return fav;
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
