var http = require("http"); // Import Module

http.createServer(function(request, response){
	
	response.writeHead(200, {'Content-Type': 'text/plain'});
	
	response.end("Hello");
}).listen(8081);

console.log("server is running");
