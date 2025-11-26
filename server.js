const express = require("express");
const bodyParser = require("body-parser");
const studentRoutes = require("./routes/students");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve frontend files
app.use(express.static("public"));

// Use student routes
app.use("/students", studentRoutes);

app.listen(3000, () =>
  console.log("🚀 Server running on http://localhost:3000")
);
