require("babel-register");

var express = require('express'),
    path = require('path'),
    app = express(),
    bodyParser = require('body-parser'),
    React = require('react'),
    ReactDOMServer = require('react-dom/server');

const config = {
  root: path.normalize(__dirname + '/..'),
  port: process.env.PORT || 4444
}

// Static
app.use(express.static(path.join(config.root, 'build')));

// Set view path
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res) {
  return res.sendFile(path.join(config.root, 'build/index.html'));
});

//Route not found -- Set 404
app.get('*', function(req, res) {
  return res.sendFile(__dirname + '/views/404.html');
});

app.listen(config.port);
console.log('Server is Up and Running at Port : ' + config.port);