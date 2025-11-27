const express = require("express");//A framework that makes building web servers easier.
const bodyParser = require("body-parser"); //that reads the data sent by users (like form inputs or JSON) through HTTP requests
const studentRoutes = require("./routes/students");//A separate file where all the rules (routes) related to "students" are defined.

const app = express();//create an Express application

app.use(bodyParser.json());//parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true }));//parse URL-encoded bodies

// Serve frontend files
app.use(express.static("public"));//Serve static files like HTML, CSS, and JavaScript from the "public" folder

// Use student routes
app.use("/students", studentRoutes);

app.listen(3000, () =>
  console.log("🚀 Server running on http://localhost:3000")
);
