var server = require('./server');
var router = require('./router');
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/api/interests"] = requestHandlers.interests;
handle["/api/users"] = requestHandlers.getUsers;
handle["/api/interests?q=(nameofinteresttoinsert)"] = requestHandlers.addInterests;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);