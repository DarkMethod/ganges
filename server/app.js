var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


// Development Settings
if (app.get('env') === 'development') {

    // For serving client app
    app.use(express.static(path.join(__dirname, '../client/.tmp')));
    app.use(express.static(path.join(__dirname, '../client/app')));
    
    // For serving admin app
    app.use('/admin', express.static(path.join(__dirname, '../admin/.tmp/serve')));
    app.use('/admin',express.static(path.join(__dirname, '../admin/src')));
}

// Production Settings
if (app.get('env') === 'production') {

    // changes it to use the optimized version for production
	app.use(express.static(path.join(__dirname, '/client-release')));
	app.use('/admin',express.static(path.join(__dirname, '/admin-release')));
}


// Routes
var router = require('./router')(app);

// Error Handling
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
    res.render('error', {
    	message: err.message,
        error: err
    });
});
    
module.exports = app;
