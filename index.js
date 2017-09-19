var server = require('./server');
var router = require('./router');
var requestHandlers = require("./requestHandlers");
var express = require("express");
var app = express;


var handle = {}
handle["/"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/api/interests"] = requestHandlers.interests;
handle["/api/interests/add"] = requestHandlers.addInterests;
handle["/api/users"] = requestHandlers.getUsers;
handle["/api/users/count"] = requestHandlers.getUsersCount;
handle["/api/users/add"] = requestHandlers.addUser;
handle["/api/users/edit"] = requestHandlers.editUser;
handle["/api/users/delete"] = requestHandlers.deleteUser;
handle["/api/users/search"] = requestHandlers.getUsersByParameters;
handle["/api/users/get"] = requestHandlers.getUsersById;
handle['api/users/login'] = login.login;

server.start(router.route, handle);

// http://localhost:8888/api/users/add?name=Sasha&phone=43535255&interests=1,2,3,4