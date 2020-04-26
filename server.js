var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 7777;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

app.get("/survey", function (req, res) {
  res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});

app.get("/api/friends", function (req, res) {
  res.sendFile(path.join(__dirname, "/app/data/futureFriends.js"));
});

app.listen(PORT, function () {
  console.log("10-4 Deploying PORT:" + PORT);
});
