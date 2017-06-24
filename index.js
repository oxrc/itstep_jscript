const path = require('path');
const express = require('express')
const expressVue = require('express-vue');
const app = express();


app.engine('vue', expressVue);
app.set('view engine', 'vue');
app.set('views', path.join(__dirname, '/vue/views'));
app.set('vue', {
    componentsDir: path.join(__dirname, '/vue/components'),
    defaultLayout: 'layout'
});


//Main page
app.get('/', function(req, res){
     var scope = {
        vue: {
            head: {
                title: 'Hello Vue',
                meta: [
                    { property:'og:title', content: 'pageTitle'},
                    { name:'twitter:title', content: 'pageTitle'}
                ]
            }
        }
    };
    res.render('main', scope)
});

const name = "fekw";
//Add user
app.get('/adduser', function(req, res){
     res.render('add_user', {
         data:{
           title: 'Add user',
           name: name
         }
     })
})




// Vue.js pages will be routed here.
app.get('/vue', function (req, res) {
  res.send('Vue.js test page.')
})

// Making the app listen to port 80 for requests.
app.listen(80, function () {
  console.log('App is listening on the 80 port.')
})