const path = require('path');
const express = require('express');
const app = express();

//DB  endpoints
var serverHandlers = require("./requestHandlers");


app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');


    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');


    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');


    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

// Vue.js pages will be routed here.
app.get('/vue', function (req, res) {
  res.send('Vue.js test page.')
});

app.get('/api/interests', function (req, res) {
  
  serverHandlers.interests(res);
});


app.get('/api/users', function (req, res) {
  serverHandlers.getUsers(res, req);
});

// Making the app listen to port 80 for requests.
app.listen(80, function () {
  console.log('App is listening on the 80 port.')
});