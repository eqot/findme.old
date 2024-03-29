
var express = require('express'),
    map = require('./routes/map'),
    http = require('http'),
    path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 8000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
    app.use(express.cookieParser('your secret here'));
    app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, '../app')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.post('/map', map.create);
app.get('/map/:id', map.read);

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
