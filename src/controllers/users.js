const { User, Favorite } = require("../db/index_db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//despues arreglar

const getUser = async (email, password) => {
  const attributes = ["id", "name"];
  const include = {
    model: Favorite,
    attributes,
    through: { attributes: [] },
  };

  const user = await User.findOne({
    where: { email },
    attributes: [...attributes, "passwordHash"],
    include,
  });

  const passwordCorrect = !user
    ? false
    : await bcrypt.compare(password, user.passwordHash);

  if (!(user && passwordCorrect)) throw new Error("Invalid email or password");

  const userForToken = {
    id: user.id,
    name: user.name,
  };

  const token = jwt.sign(userForToken, process.env.SECRET, {
    expiresIn: 60 * 60 * 24 * 7,
  });

  const { passwordHash, id, ...restOfuser } = user.toJSON();

  return { ...restOfuser, token };
};

const postUser = async (name, email, password) => {
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = await User.create({ name, email, passwordHash });
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
