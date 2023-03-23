const User = require("../db/models/User");

//despues arreglar
const getUser = async (email) => {
  const users = await User.findAll();
  return users;
};

const 