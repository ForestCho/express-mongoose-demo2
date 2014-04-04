
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var userdb = require('./routes/userdb');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


//mongoose
mongoose.connect('mongodb://localhost/test-demo');

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


app.get('/', routes.index);
app.get('/users', user.list);
app.get('/add', userdb.add);
app.get('/show', userdb.show);
app.get('/showbyname',userdb.showbyname);
app.get('/removebyname',userdb.removebyname);
app.get('/updatebyname',userdb.updatebyname);
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
