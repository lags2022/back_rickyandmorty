const router = require("express").Router();
const { getUser, postUser, deleUser } = require("../controllers/users");

router.post("/users/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await getUser(email,password);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/users", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      throw new Error("Missing required fields");
    const user = await postUser(name, email, password);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) throw new Error("Missing required fields");
    const user = await deleUser(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
