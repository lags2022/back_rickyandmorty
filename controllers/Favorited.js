let fav = [];

const postFavorites = (id, name, image, gender) => {
  const addFav = {
    id,
    name,
    image,
    gender,
  };
  fav.push(addFav);
  return addFav;
};

const deleteFavorites = (id) => {
  const deletfav = fav.find((f) => f.id === id);
  if (!deletfav) return { error: "favorite not found" };
  fav = fav.filter((f) => f.id !== id);
  return deletfav;
};

const resetFavorites = () => {
  fav = [];
  return fav;
};

const getFavorites = () => {
  return fav;
};

module.exports = {
  getFavorites,
  postFavorites,
  deleteFavorites,
  resetFavorites,
};
