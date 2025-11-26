const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root", // change if you have a different user
  password: "", // add your MySQL password if set
  database: "studentdb",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("✅ Connected to MySQL!");
});

module.exports = connection;
