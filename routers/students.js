const express = require("express");
const student = require("../models/student");
const router = express.Router();

router.get("/", async function (req, res) {
  try {
    const students = await student.find();
    res.json(students);
  } catch (err) {
    res.send("Error" + err);
  }
});

router.get("/:id", async function (req, res) {
  try {
    const st = await student.findById(req.params.id);
    res.json(st);
  } catch (err) {
    res.send("Error" + err);
  }
});

router.post("/", async function (req, res) {
  console.log(req.body);
  const s = new student({
    name: req.body.name,
    roll_no: req.body.roll_no,
    courses: req.body.courses,
  });

  try {
    const data = await s.save();
    res.send(data);
  } catch (err) {
    res.send("Error" + err);
  }
});

router.patch("/:id", async function (req, res) {
  try {
    const st = await student.findById(req.params.id);
    const arr = Object.keys(req.body);
    for (let i = 0; i < arr.length; i++) {
      st[arr[i]] = req.body[arr[i]];
    }
    const s1 = await st.save();
    res.json(s1);
  } catch (err) {
    res.send("Error" + err);
  }
});

router.delete("/:id", async function (req, res) {
  try {
    const st = await student.remove({ _id: req.params.id });
    res.json(st);
  } catch (err) {
    res.send("Error" + err);
  }
});

module.exports = router;
