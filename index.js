var server = require('./server');
var router = require('./router');
var requestHandlers = require("./requestHandlers");
var express = require("express");

var handle = {}
handle["/"] = requestHandlers.start;
<<<<<<< HEAD
handle["/api/interests"] = requestHandlers.interests;
handle["/api/users"] = requestHandlers.getUsers;
handle["/api/interests?q=(nameofinteresttoinsert)"] = requestHandlers.addInterests;
=======
handle["/api/interests/interest=*"] = requestHandlers.add_interests;
>>>>>>> 17aadc012cbb3eb10167227417ab72d2788bc61d
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);