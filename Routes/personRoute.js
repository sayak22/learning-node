const express = require("express");
const Person = require("../models/Person");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const savedPerson = await newPerson.save();
    console.log("data saved");
    res.status(200).json(savedPerson);
  } catch (err) {
    console.log(err);
    res.status(500).json({ Error: "Internal server errow" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data retrieved");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ Error: "Internal server errow" });
  }
});

router.get("/:worktype", async (req, res) => {
  try {
    const workType = req.params.worktype;
    if (workType == "chef" || workType == "manager" || workType == "waiter") {
      const data = await Person.find({ workType: workType });
      console.log("data retrieved");
      res.status(200).json(data);
    } else {
      console.log("work type is invalid");
      res.status(404).json({ Error: "Invalid work type" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ Error: "Internal server errow" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const objID = req.params.id;
    const data = req.body;
    const updatedPerson = await Person.findByIdAndUpdate(objID, data);
    console.log("data updated");
    res.status(200).json(updatedPerson);
  } catch (err) {
    console.log(err);
    res.status(500).json({ Error: "Internal server errow" });
  }
});

router.delete("/:name", async (req, res) => {
  try {
    const objName = req.params.name;
    const response = await Person.findOneAndDelete({ name: objName }); //to delete something by object ID just use findbyIDAndDelete(objId)
    if (!response) {
      console.log("Person not found");
      res.status(404).json({ Error: "Data not found" });
    }
    console.log("Person deleted");
    res.status(200).json({ Message: "Data deleted successfully!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ Error: "Internal server errow" });
  }
});

module.exports = router;
