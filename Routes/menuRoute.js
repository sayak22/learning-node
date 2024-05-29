const express = require("express");
const router = express.Router();
const Menu = require("../models/MenuItem");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newMenuItem = new Menu(data);
    const savedMenuItem = await newMenuItem.save();
    console.log("data saved");
    res.status(200).json(savedMenuItem);
  } catch (err) {
    console.log(err);
    res.status(500).json({ Error: "Internal server errow" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Menu.find();
    console.log("data retrieved");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ Error: "Internal server errow" });
  }
});

module.exports = router;
