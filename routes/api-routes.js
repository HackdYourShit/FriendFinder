
var friends = require("../data/friends.js");

module.exports = funciton(app){

    app.get("/api/friends", funciton(req, res){
        res.json(friends);
    });

    app.post("/api/friends", funciton(req, res){
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        console.log(req.body);

        var userData = req.body;
        var userScores = userData.scores;

        console.log(userScores);

        var totalDifference = 0;

        for(var i = 0; i < friends.length; i++) {
            console.log(friends[i].name);
            totalDifference = 0;

            for (var i = 0; i < friends[i].scores[j]; j++) {
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

            if (totalDifference <= bestMatch.friendDifference) {

                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
                bestMatch.friendDifference = totalDifference;
            }
        }
    }

    friends.push(userData);

    res.json(bestMatch);
});
}