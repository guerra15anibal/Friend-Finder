var friends = "../data/futureFriends.js";

module.exports = function (app) {
  app.get("/api/friends"),
    function (req, res) {
      res.json(futureFriends);
    };
};

app.get("/friendfinder", function (req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/survey", function (req, res) {
  res.sendFile(path.join(__dirname, "survey.html"));
});
