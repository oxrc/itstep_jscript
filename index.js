var server = require('./server');
var router = require('./router');
var requestHandlers = require("./requestHandlers");
var express = require("express");

var handle = {}
handle["/"] = requestHandlers.start;

handle["/api/interests"] = requestHandlers.interests;
handle["/api/interests/add"] = requestHandlers.addInterests;
handle["/api/users"] = requestHandlers.getUsers;
handle["/api/users/count"] = requestHandlers.getUsersCount;
handle["/api/users/add"] = requestHandlers.addUser;
handle["/api/users/edit"] = requestHandlers.editUser;
handle["/api/users/delete"] = requestHandlers.deleteUser;
handle["/api/users/search"] = requestHandlers.getUsersByParameters;


server.start(router.route, handle);