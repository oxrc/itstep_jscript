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
handle["/api/users/delete"] = requestHandlers.deleteUser;

server.start(router.route, handle);


// http://localhost:8888/api/users/add?name=Sasha&phone=43535255&interests=1,2,3,4