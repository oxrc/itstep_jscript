const path = require('path');
const express = require('express')
const expressVue = require('express-vue');
const app = express();

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

app.get('/vue/user/edit/:id', function(req, res){
  res.send(req.params);
})

// Making the app listen to port 80 for requests.
app.listen(80, function() {
  console.log('App is listening on the 80 port.');
})