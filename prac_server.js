var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;

function handleRequest(request, response){
	response.end("Path hit: "+request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT1, function(){
	console.log("Server listening on: http://localhost:%s", PORT1);
	console.log("You are amazin!!!");
})

server.listen(PORT2, function(){
	console.log("Server listening on: http://localhost:%s", PORT2);
	console.log("Your breath STANKS");
})