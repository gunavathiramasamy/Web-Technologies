const express = require("express");//A framework for building web servers
const router = express.Router();//Create a new router object to define routes related to "students"
const db = require("../db"); //Go up one folder

// CREATE
router.post("/", (req, res) => {       //When a POST request is made to the root URL of this router
  const { name, email, course } = req.body;
  db.query(
    "INSERT INTO students (name,email,course) VALUES (?,?,?)", //SQL query to insert a new student record into the "students" table
    [name, email, course], //Values to be inserted into the query placeholders
    (err, result) => {   //Callback function to handle the result of the query
      if (err) return res.status(500).send(err); //If there's an error, send a 500 status with the error message
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
