var http = require('http');
var dt = require('./datetimemodule');
http.createServer(function(req, res){
    res.writeHead(200 , {'content-type': 'text/plain'});
    res.write('The date is ' + dt.myDateTime());
    res.write(req.url);
    //res.end();
}).listen(8080);
console.log('Joy');

set