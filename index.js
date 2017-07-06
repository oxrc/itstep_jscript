var server = require('./server');
var router = require('./router');
var requestHandlers = require("./requestHandlers");
var express = require("express");

var handle = {}
handle["/"] = requestHandlers.start;

handle["/api/interests"] = requestHandlers.interests;
handle["/api/users"] = requestHandlers.getUsers;
handle["/api/add/interests"] = requestHandlers.addInterests;

server.start(router.route, handle);