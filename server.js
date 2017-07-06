var http = require('http');
var url = require('url');
var express = require("express");
var app = express;
var querystring = require('querystring');

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request received." + pathname);
        route(handle, pathname, response, request);
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;0