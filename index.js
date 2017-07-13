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
var pageTitle='Main page';

// Main page
app.get('/vue', function(req, res) {
  res.render('main');
});

// Add user
app.get('/vue/user/add', function (req, res) {
  // Setup the variables for 'Add user' page.
  pageTitle = 'Add User';
  var scope = {
    data: {
      title: 'Add user',
    },
    vue: {
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
app.get('/vue/addinteres', function(req, res) {
  res.render('add_interes');
});

app.get('/vue/user/edit/:id', function (req, res) {
  res.send(req.params);
});

// Server mockups
var user_list = {
  users: [
    {
      id: 1,
      name: "Valera",
      age: 18,
      phone: "+37379865764",
      interests: [1, 5, 7, 8]
    },
    {
      id: 2,
      name: "Maria",
      age: 20,
      phone: "+37379003413",
      interests: [2, 7, 8]
    },
    {
      id: 3,
      name: "Ionela",
      age: 25,
      phone: "+37369903436",
      interests: [4, 5]
    },
    {
      id: 4,
      name: "Ionela",
      age: 21,
      phone: "+37369654688",
      interests: [1, 2, 3]
    },
  ]
}
app.get('/api/user/list', function (req, res) {
  res.json(user_list);
});
app.get('/api/user/:uid', function (req, res) {
  let uid = parseInt(req.params.uid, 10);
  let existing_user;
  for (let user of user_list.users) {
    if (uid == user.id) {
      existing_user = user;
    }
  }
  if (undefined === existing_user) {
    existing_user = { error: 'User not found' };
  }
  res.json(existing_user);
});

// Server endpoints.
app.get('/api/interests', function (req, res) {
  serverHandlers.interests(res);
});

app.get('/api/users', function(req, res){
  serverHandlers.getUsers(res, req);
});

app.get('/api/interests/add', function(req, res){
  serverHandlers.getUsers(res, req);
});

// Making the app listen to port 80 for requests.
app.listen(80, function() {
  console.log('App is listening on the 80 port.');
});
