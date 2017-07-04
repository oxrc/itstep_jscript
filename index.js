var server = require('./server');
var router = require('./router');
var requestHandlers = require("./requestHandlers");
var express = require("express");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/api/interests/interest=*"] = requestHandlers.add_interests;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);