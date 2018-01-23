const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});


// "/" => "Hi there!"
app.get(("/"), function(req, res){
    res.send("Hi there!");
});
// "/bye" => "Goodbye!"
app.get(("/bye"), function(req, res){
   res.send("Goodbye!");
});
// "/dog" => "MEOW!"
app.get(("/dog"), function(req, res){
    console.log("someone made a request to /dog");
    res.send("MEOW!");
});

app.get("*", function(req, res) {
    res.send("You are a star!!");
});
//Tell Express to listen for requests (start server)

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
