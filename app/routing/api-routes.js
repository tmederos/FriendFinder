// Dependencies
var path = require('path');
var friendsList = require('../data/friends.js');

// ===============================================================================
// ROUTING
// ===============================================================================
  // API GET Requests
  // Below code handles when users "visit" a page.
module.exports = function(app){
  //default GET route that leads to home.html - displays home page
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
  });

  //a USE route to home page
  app.get(function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });
};
  // API POST Requests
  //Below code handles when a user submits a form and thus submits data to the server.
module.exports = function(app){
  //a GET route that displays JSON of all possible friends
  app.get('/api/friends', function(req,res){
    res.json(friendsList);
  });

  app.post('/api/friends', function(req,res){
    //grabs the new friend's scores to compare with friends in friendsList array
    var newFriendScores = req.body.scores;
    var scoresArray = [];
    var friendCount = 0;
    var bestMatch = 0;

    //runs through all current friends in list
    for(var i=0; i<friendsList.length; i++){
      var scoresDiff = 0;
      //run through scores to compare friends
      for(var j=0; j<newFriendScores.length; j++){
        scoresDiff += (Math.abs(parseInt(friendsList[i].scores[j]) - parseInt(newFriendScores[j])));
      }
      //push results into scoresArray
      scoresArray.push(scoresDiff);
    }

    //after all friends are compared, find best match
    for(var i=0; i<scoresArray.length; i++){
      if(scoresArray[i] <= scoresArray[bestMatch]){
        bestMatch = i;
      }
    }

    //return bestMatch data
    var bestFriend = friendsList[bestMatch];
    res.json(bestFriend);
    //pushes new submission into the friendsList array
    friendsList.push(req.body);
  });

  // ---------------------------------------------------------------------------
  // This is for testing. Not needed for the final version of the code.
  app.post('/api/clear', function(req, res){
    // Empty out the arrays of data
    friendsList = [];
    console.log(friendsList);
  })


};
