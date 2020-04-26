var friends = require("../data/futureFriends.js");

app.get("/api/friends", function (req, res) {
  return res.json(friends);
  console.log(friends);
});


