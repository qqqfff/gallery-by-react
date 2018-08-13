var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/',express.static('./'));

app.listen(port);
console.log('web start at', port);
