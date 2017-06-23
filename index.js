const express = require('express')
const expressVue = require('express-vue');
const app = express();


app.engine('vue', expressVue);
app.set('view engine', 'vue');
app.set('views', path.join(__dirname, '/views'));
app.set('vue', {
    componentsDir: path.join(__dirname, '/vue/components'),
    defaultLayout: 'layout'
});


app.engine('vue', expressVue);
app.set('view engine', 'vue');

app.get('/', (req, res)  {
  var scope = {
        data: {
            title: pageTitle,
            message: 'Hello!'
        },
        vue: {
            head: {
                title: pageTitle,
                meta: [
                    { property:'og:title', content: pageTitle},
                    { name:'twitter:title', content: pageTitle}
                 ]
                }
            },
            mixins: [exampleMixin]
        }
    };
    res.render('main', scope);
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