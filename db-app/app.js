"use strict";
const express = require("express");
const dbConnection = require("./postgre");

const app = express();

dbConnection.connect((err, client) => {
  if (err) {
    console.error("Database connection error: ", err.stack);
  } else {
    console.log("Connected to PostgreSQL database");
  }
});

app.get("/students", (req, res) => {
  dbConnection.query("SELECT * FROM student", (err, results, fields) => {
    if (err) {
      console.log("Database query error: ", err);
    } else {
      res.status(200).json({
        status: "success",
        data: results.rows,
      });
    }
  });
});

app.get("/students/add/:name/:puan", (req, res) => {
  dbConnection.query(
    `INSERT INTO student (name, puan) VALUES ('${req.params.name}', ${parseInt(req.params.puan)})`,
    (err, results, fields) => {
      if (err) {
        console.log("Database query error: ", err);
      }
      else {
        console.log("Data inserted succesfully");
      }
    });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});





