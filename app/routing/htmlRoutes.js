var path = require("path");

module.exports = function (app) {
  app.get("/friends", function (req, res) {
    res.sendFile(path.join(__dirname, "add/public/home.html"));
  });
};
