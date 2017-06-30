
// Same Application Runs in multiple Servers at a Time

var http = require("http");

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   // Send the response body as "Hello World"
   response.end('Hello Developer\n');
}).listen(8080);

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    console.log("node started");
    res.end('Hello World!');
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');