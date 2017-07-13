var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('This is simple example to print Hello World');
    res.write("\n");
    res.end('Hello World!');
}).listen(8080);