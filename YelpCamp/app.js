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

var campgrounds = [
  {name: "Salmon Creek", image: "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5cedc6b95f731395da7269d2341f9a5e&auto=format&fit=crop&w=1050&q=80"},
  {name: "Granite Hill", image: "https://images.unsplash.com/photo-1503265192943-9d7eea6fc77a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=89f8de1875d71adbd5fff976ac2341be&auto=format&fit=crop&w=967&q=80"},
  {name: "Mountain Goat's Rest", image: "https://images.unsplash.com/photo-1499363145340-41a1b6ed3630?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b3761b04cf7c21b831647fbef86ad438&auto=format&fit=crop&w=1050&q=80"}
];

app.get("/", function(req, res){
  res.render("landing");
});

app.get("/campgrounds", function(req, res){
  res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
  //get data from form and add to campgrounds array
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image};
  campgrounds.push(newCampground);
  //redirect back to campgrounds page
  res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
  res.render("new.ejs");
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
