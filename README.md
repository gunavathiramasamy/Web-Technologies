1. Setup Environment
Install Node.js and MySQL on your system.

npm init -y
npm install express mysql body-parser

Express will handle routes, MySQL package connects to DB, body-parser parses form data.

🖥 Backend Code
2. Create Database & Table
In MySQL:
CREATE DATABASE studentdb;
USE studentdb;

CREATE TABLE students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  course VARCHAR(50)
);
studentdb: database name
students: table for CRUD demo


Create a new project folder and initialize with:
Project Structure
crud-app/
│
├── server.js          # Main backend file
├── db.js              # MySQL connection
├── routes/
│   └── students.js    # CRUD routes
└── public/
    ├── index.html     # Frontend
    ├── style.css
    └── script.js

Make sure that db.js and server.js in the same folder
3. Connect Node.js to MySQL
   db.js
   mysql.createConnection: establishes DB connection
4. Setup Express Server
   server.js - Write CRUD routes
   express.static: serves frontend files 
Create a folder routes
Split Into a Separate Routes File
For larger projects, it’s cleaner to keep routes in a separate file (e.g., routes/students.js)

Frontend Code

public/index.html
5. Create a folder Public
  Under which create files index.html, style.css and script.css
  
To run the server
node server.js
Verify the server running
    Server running on http://localhost:3000
    Connected to MySQL!
Open browser at:  http://localhost:3000
