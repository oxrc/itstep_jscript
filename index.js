var express = require('express')
var app = express()

// Vue.js pages will be routed here.
app.get('/vue', function (req, res) {
  res.send('Vue.js test page.')
})

// Making the app listen to port 80 for requests.
app.listen(80, function () {
  console.log('App is listening on the 80 port.')
})