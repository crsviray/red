//server.js
//require modules
var express = require('express');
var path = require('path');
//instantiate express
var app = express();
//set port
app.set('port', (process.env.PORT || 5000));
//use static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(('/js'),express.static(path.join(__dirname, '/assets/js')));
app.use(('/img'),express.static(path.join(__dirname, '/assets/images')));
app.use(('/css'),express.static(path.join(__dirname, '/assets/css')));
app.use(('/fonts'),express.static(path.join(__dirname, '/assets/fonts')));
//express routes
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '/assets/index.html'));
});
app.get('/about', function(req, res){
  res.sendFile(path.join(__dirname, '/assets/generic.html'));
});
//express server listen
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});