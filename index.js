const express = require('express')
const expressVue = require('express-vue');
const app = express();
app.set('views', __dirname + '/vue/views');
//Optional if you want to specify the components directory separate to your views, and/or specify a custom layout. 
app.set('vue', {
    //ComponentsDir is optional if you are storing your components in a different directory than your views 
    componentsDir: __dirname + '/vue/components',
    //Default layout is optional it's a file and relative to the views path, it does not require a .vue extension. 
    //If you want a custom layout set this to the location of your layout.vue file. 
    defaultLayout: 'layout'
});
app.engine('vue', expressVue);
app.set('view engine', 'vue');

app.get('/', (req, res) => {
  res.render('main', {
    data: {
      otherData: 'Something Else'
    },
    vue: {
      head: {
        title: 'Show all users',
        head: [
          { property:'og:title', content: 'Page Title'},
          { name:'twitter:title', content: 'Page Title'},
      ]
      }    
    }
  });
})

// Vue.js pages will be routed here.
app.get('/vue', function (req, res) {
  res.send('Vue.js test page.')
})

// Making the app listen to port 80 for requests.
app.listen(80, function () {
  console.log('App is listening on the 80 port.')
})