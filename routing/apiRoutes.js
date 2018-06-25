/*
A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
*/

// Routes
// =============================================================
module.exports = function(app) {

app.get("/api/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
  });
  

app.post("/api/friends", function(req, res) {
  newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();

  console.log(newfriend);

  friend.push(newfriend);

  res.json(newfriend);
});
};