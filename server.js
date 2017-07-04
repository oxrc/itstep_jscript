var http = require('http');
var url = require('url');

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;

        console.log("Request received." + pathname);

        var param = querystring(string)["interest"];


        console.log("Request received.");
        route(handle, pathname, response, param);
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;