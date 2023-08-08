const axios = require('axios')
const url = 'https://rickandmortyapi.com/api/character'

const getCharDetail = async (id) => {
  try {
    const { data } = await axios(`${url}/${id}`)

    const episoded = await axios(data.episode.at(0))

    const character = {
      id,
      image: data.image,
      name: data.name,
      gender: data.gender,
      species: data.species,
      status: data.status,
      origin: data.origin?.name,
      episode: episoded.data?.name
    }

    return character
  } catch (error) {
    throw new Error('missing character')
  }
}

module.exports = getCharDetail
