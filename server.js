const express = require("express");
require('dotenv').config();
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

//welcome message
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//routers
const personRoute = require("./Routes/personRoute");
app.use("/person", personRoute);
const menuRoute = require("./Routes/menuRoute");
app.use("/menu", menuRoute);

let PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
