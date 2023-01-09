// require express
const express = require("express");

// create an ap variable = to express()
const app = express();

// What happens when a our server receives a get request
app.get("/", function (req, res) {
  res.send("<h1>Hello world<h1>");
});

app.get("/contact", function (req, res) {
  res.send("Contact me at: kevin@gmail.com");
});

app.get("/about", function (req, res) {
  res.send("<h1>Kevin A. Stevens</h1>");
});

app.get("/hobbies", function (req, res) {
  res.send("<h1>Hobbies</h1>");
});

// listen for any HTML requests on a specified port
app.listen(3000, function () {
  console.log("Server started on port 3000");
});

// run node server.js
// goto localhost:3000
