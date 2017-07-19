var http = require("http");

//Define the ports
var PORT1 = 7000;
var PORT2 = 7500;

//Take server requests and responses
function handleRequest(request, response){
	response.write("You are amazin!!!");
	response.end("Path hit: "+request.url);
}

function handleRequest_2(request, response){
	response.write("Your breath STANKS");
	response.end("Path hit: "+request.url);
}

//===========================Create Servers=======================================
var server = http.createServer(handleRequest);
var server_2 = http.createServer(handleRequest_2);
//==================================================================

//Listen for requests on each port
server.listen(PORT1, function(){
	console.log("Server listening on: http://localhost:%s", PORT1);
})

server_2.listen(PORT2, function(){
	console.log("Server listening on: http://localhost:%s", PORT2);
})