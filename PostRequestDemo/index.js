const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.render("home");
});

var friends = ["Emma", "John", "Alex", "Anna"];

app.post("/addfriend", function(req, res){
  friends.push(req.body.newfriend);
  res.redirect("/friends");
});

app.get("/friends", function(req, res){
  res.render("friends", {friends: friends});
});

//Tell Express to listen for requests (start server)

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
