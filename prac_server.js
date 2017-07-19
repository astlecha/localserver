var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;

function handleRequest(request, response){
	response.write("You are amazin!!!");
	response.end("Path hit: "+request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT1, function(){
	console.log("Server listening on: http://localhost:%s", PORT1);
})

function handleRequest_2(request, response){
	response.write("Your breath STANKS");
	response.end("Path hit: "+request.url);
}

var server = http.createServer(handleRequest_2);

server.listen(PORT2, function(){
	console.log("Server listening on: http://localhost:%s", PORT2);
})