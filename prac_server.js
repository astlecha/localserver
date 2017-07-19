var http = require('http');

var PORT1 = 7000;
var PORT2 = 7500;

function handleRequest(request, response){
	response.end('Path hit: '+request.url);
}