const app = require("./app");
const { database } = require("./db/index_db");

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  console.log(`server listening on port ${port}`);
  await database.sync({ alter: true });
});
