var express = require('express');
var app = express();
var exports = module.exports = {};
var versionNumber = "0.0.1"
var content = ""

function greetingMessage(){
    var message = "Welcome to my CI/CD with CircleCI!";
    return message;
}

content = greetingMessage() + "\n Version Number: " + versionNumber

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    // var message = "Hello World";
    res.render("index", {message: content});
});

var server = app.listen(5000, function () {
    console.log("Node server is running on port: "+ server.address().port);
});

module.exports = server;
module.exports.greetingMessage = greetingMessage;