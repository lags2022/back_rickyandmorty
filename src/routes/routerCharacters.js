const { Router } = require('express')
const getCharById = require('../controllers/getCharById')
const getCharDetail = require('../controllers/getCharDetail')
const {
  deleteFavorites,
  resetFavorites,
  getFavPg,
  createFavPg
} = require('../controllers/Favorited')
const authorization = require('./authorization')

const router = Router()

router.get('/fav', authorization, async (req, res) => {
  try {
    const { idUser } = req
    const getFavs = await getFavPg(idUser)
    return res.status(200).json(getFavs)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

router.post('/fav', authorization, async (req, res) => {
  try {
    const { id, name, image, gender } = req.body
    const { idUser } = req

    if (![id, name, image, gender, idUser].every(Boolean)) { throw new Error('missing data favorites') }

    const createFavs = await createFavPg({ ...req.body, idUser })

    return res.status(200).json(createFavs)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

router.get('/character/:id', async (req, res) => {
  try {
    const character = await getCharById(+req.params.id)
    res.status(200).json(character)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.get('/detail/:id', async (req, res) => {
  try {
    const character = await getCharDetail(+req.params.id)
    res.status(200).json(character)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

router.delete('/fav/reset', authorization, async (_, res) => {
  try {
    const favorites = await resetFavorites()
    res.status(200).json(favorites)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

router.delete('/fav/:id', authorization, async (req, res) => {
  try {
    const deleteFav = await deleteFavorites(+req.params.id)
    res.status(200).json(deleteFav)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

module.exports = router
