const axios = require("axios");

const getCharById = async (id) => {
  try {
    const { data } = await axios(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const character = {
      id: id,
      image: data.image,
      name: data.name,
      gender: data.gender,
      species: data.species,
    };
    return character;
  } catch (error) {
    throw new Error("missing character");
  }
};

module.exports = getCharById