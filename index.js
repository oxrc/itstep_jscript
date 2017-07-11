var server = require('./server');
var router = require('./router');
var requestHandlers = require("./requestHandlers");
var express = require("express");
var app = express;


var handle = {}
handle["/"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/api/interests"] = requestHandlers.interests;
handle["/api/users"] = requestHandlers.getUsers;
handle["/api/interests/add"] = requestHandlers.addInterests;
handle["/api/users/add"] = requestHandlers.addUser;

server.start(router.route, handle);