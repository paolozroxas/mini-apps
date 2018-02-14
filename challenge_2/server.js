const express = require('express');
const app = express();
const jsonToCsv = require('./converter.js');

const morgan = require('morgan');
const bodyParser = require('body-parser');

//Middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));

//serve static files
app.use(express.static('client_dist'));

app.options('/', (req, res) => {
  //set CORS headers
  res.set({
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'access-control-allow-headers': 'content-type, accept',
    'access-control-max-age': 10
  });
  res.statusCode = 200;
  res.send();
})

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/', (req, res) => {
  res.set({
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'access-control-allow-headers': 'content-type, accept',
    'access-control-max-age': 10
  });
  console.log(req.body);
  jsonToCsv.convert(req.body);
  res.send(JSON.stringify('hello there, thank you for the post'));
})

app.listen(8080, () => console.log('listening on port 8080'));
