const express = require("express");
const cors = require("cors");
const morgan=require("morgan")
const Characters = require("./routes/routerCharacters");
const Users = require("./routes/routerUser");

const app = express();

app.use(express.json());
app.use(morgan("dev"))
app.use(cors());
app.use("/rickandmorty", Characters);
app.use("/ramusers", Users);

app.get("/", (req, res) => {
  res.send("bienvenido a esta aplicacion");
});

module.exports = app;
