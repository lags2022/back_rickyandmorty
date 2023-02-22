const express = require("express");
const cors = require("cors");
const morgan=require("morgan")
const getCharacters = require("./routes/routerCharacters");

const app = express();

app.use(express.json());
app.use(morgan("dev"))
app.use(cors());
app.use("/rickandmorty", getCharacters);

app.get("/", (req, res) => {
  res.send("bienvenido a esta aplicacion");
});

module.exports = app;
