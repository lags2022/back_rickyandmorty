const { Router } = require("express");
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");
const {
  // getFavorites,
  // postFavorites,
  deleteFavorites,
  resetFavorites,
  getFavPg,
  createFavPg,
} = require("../controllers/Favorited");

const router = Router();

router.get("/fav", async (req, res) => {
  try {
    const getFavs = await getFavPg();
    return res.status(200).json(getFavs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/fav", async (req, res) => {
  try {
    const { id, name, image, gender } = req.body;
    if (![id, name, image, gender].every(Boolean))
      throw new Error("missing data favorites");
    const createFavs = await createFavPg(req.body);
    return res.status(200).json(createFavs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/character/:id", async (req, res) => {
  try {
    const character = await getCharById(+req.params.id);
    res.status(200).json(character);
  } catch (error) {
    res.status(505).json({ error: error.message });
  }
});

router.get("/detail/:id", async (req, res) => {
  try {
    const character = await getCharDetail(+req.params.id);
    res.status(200).json(character);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// router.get("/fav", async (req, res) => {
//   try {
//     const favorites = getFavorites();
//     res.status(200).json(favorites);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

router.delete("/fav/reset", async (req, res) => {
  try {
    const favorites = await resetFavorites();
    res.status(200).json(favorites);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// router.post("/fav", async (req, res) => {
//   try {
//     const { id, name, image, gender } = req.body;
//     if (![id, name, image, gender].every(Boolean))
//       throw new Error("missing data");
//     const newFavorite = postFavorites(id, name, image, gender);
//     res.status(200).json(newFavorite);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

router.delete("/fav/:id", async (req, res) => {
  try {
    const deleteFav = await deleteFavorites(+req.params.id);
    res.status(200).json(deleteFav);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
