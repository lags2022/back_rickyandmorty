const { User, Favorite } = require("../db/index_db");

//despues arreglar
const getUser = async (name) => {
  const attributes = ["id", "name", "email"];
  const include = {
    model: Favorite,
    attributes: ["id", "name"],
    through: { attributes: [] },
  };
  const user = !name
    ? await User.findAll({ attributes, include })
    : await User.findOne({
        where: { name },
        attributes,
        include,
      });
  return user;
};

const postUser = async (name, email, password) => {
  const user = await User.create({ name, email, password });
  return user;
};

const deleUser = async (id) => {
  const user = await User.findByPk(id);
  await user.destroy();
  return user;
};

module.exports = {
  getUser,
  postUser,
  deleUser,
};
