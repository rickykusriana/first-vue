// server.js
var express = require('express');
var serveStatic = require('serve-static');
var path = require('path');

app = express();

app.use(serveStatic(__dirname + "/dist"));

var port = process.env.PORT || 8080;
app.listen(port);

console.log('server started '+ port);
