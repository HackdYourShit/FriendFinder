
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require("path");

var PORT = process.env.PORT || 8080;

//var jsonParser = bodyParser.json()

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json({type: 'application/++json'}))

app.use(bodyParser.raw({type: 'application/vnd.custom-type' }))

app.use(bodyParser.text({type: 'text/html' }))

require("../FriendFinder/routes/html-routes")(app);
require("../FriendFinder/routes/api-routes") (app);

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});