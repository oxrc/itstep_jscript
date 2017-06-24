const path = require('path');
const express = require('express')
const expressVue = require('express-vue');
const app = express();


app.engine('vue', expressVue)
app.set('view engine', 'vue')
app.set('views', path.join(__dirname, '/vue/views'))
app.set('vue', {
    componentsDir: path.join(__dirname, '/vue/components'),
    defaultLayout: 'layout'
})
app.use(express.static(path.join(__dirname, 'public')))




//Main page
app.get('/vue/main', function(req, res){
    res.render('main')
});

//Add user
app.get('/vue/main/adduser', function(req, res){
    var scope = {
        data: {
            title: 'Add user'
        }
    }
    res.render('add_user', scope)
});

//Add interes
app.get('/vue/main/addinteres', function(req, res){
     res.render('add_interes')
});


// Vue.js pages will be routed here.
app.get('/vue', function (req, res) {
  res.send('Vue.js test page.')
})

// Making the app listen to port 80 for requests.
app.listen(80, function () {
  console.log('App is listening on the 80 port.')
})