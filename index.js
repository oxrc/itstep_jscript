// Expressjs initalization.
const path = require('path');
const express = require('express')
const expressVue = require('express-vue');
const app = express();

// DB server endpoints initialization.
var serverHandlers = require("./requestHandlers");

// Init vue app.
app.engine('vue', expressVue);
app.set('view engine', 'vue');
app.set('views', path.join(__dirname, '/vue/views'));
app.set('vue', {
  componentsDir: path.join(__dirname, '/vue/components'),
  defaultLayout: 'layout'
});
app.use(express.static(path.join(__dirname, 'public')));

// Init default variables
var pageTitle = 'Main page';

// Main page
app.get('/vue', function (req, res) {
  res.render('main');
});

var initApp = function () {
  console.log('I have been intialised');
}

// Add user
app.get('/vue/user/add', function (req, res) {
  // Setup the variables for 'Add user' page.
  pageTitle = 'Add User';
  var scope = {
    data: {
      title: 'Add user',
    },
    vue: {
      created: initApp,
      head: {
        title: pageTitle,
        meta: [
          { property: 'og:title', content: pageTitle },
          { name: 'twitter:title', content: pageTitle }
        ],
      }
    }
  }
  res.render('add_user', scope);
});

//Add interes
app.get('/vue/addinteres', function (req, res) {
  res.render('add_interes');
});

app.get('/vue/user/edit/:id', function (req, res) {
  res.send(req.params);
});

// Server endpoints.
app.get('/api/interests', function (req, res) {
  serverHandlers.interests(res);
});

app.get('/api/users', function (req, res) {
  serverHandlers.getUsers(res, req);
});

app.get('/api/interests/add', function (req, res) {
  serverHandlers.getUsers(res, req);
});

// Making the app listen to port 80 for requests.
app.listen(80, function () {
  console.log('App is listening on the 80 port.');
});
