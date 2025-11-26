const express = require("express");
const router = express.Router();
const db = require("../db");

// CREATE
router.post("/", (req, res) => {
  const { name, email, course } = req.body;
  db.query(
    "INSERT INTO students (name,email,course) VALUES (?,?,?)",
    [name, email, course],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.send("Student added!");
    }
  );
});

// READ
router.get("/", (req, res) => {
  db.query("SELECT * FROM students", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// UPDATE
router.put("/:id", (req, res) => {
  const { name, email, course } = req.body;
  db.query(
    "UPDATE students SET name=?, email=?, course=? WHERE id=?",
    [name, email, course, req.params.id],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.send("Student updated!");
    }
  );
});

// DELETE
router.delete("/:id", (req, res) => {
  db.query(
    "DELETE FROM students WHERE id=?",
    [req.params.id],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.send("Student deleted!");
    }
  );
});

module.exports = router;
