var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

//middleware
var morgan = require('morgan');
var bodyParser = require('body-parser');

app.use(morgan('tiny'));
app.use(bodyParser.json());

app.use(express.static('./client_dist'));

app.listen(port, () => console.log('listening on port ', port));
