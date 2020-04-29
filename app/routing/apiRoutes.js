var futurefriends = require("../data/futureFriends.js");

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(futurefriends);
  });

  app.post("/api/friends", function (req, res) {
    var newPeep = {
      name: req.body.name,
      photo: req.body.photo,
      scores: [],
    };
    var myScores = [];
    for (var i = 0; i < req.body.scores.length; i++) {
      myScores.push(parseInt(req.body.scores[i]));
    }
    newPeep.scores = myScores;

    var scores = [];
    for (var i = 0; i < futurefriends.length; i++) {
      var comp = 0;
      for (var j = 0; j < newPeep.scores.length; j++) {
        comp += Math.abs(newPeep.scores[j] - futurefriends[i].scores[j]);
      }

      scores.push(comp);
    }

    var match = 0;
    for (var i = 1; i < scores.length; i++) {
      if (scores[i] <= scores[match]) {
        match = i;
      }
    }

    var bestMatch = futurefriends[match];

    res.json(bestMatch);

    futurefriends.push(newPeep);
  });
};
