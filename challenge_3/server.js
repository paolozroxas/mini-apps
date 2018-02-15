const express = require('express');
const app = express();

var port = process.env.PORT || 8080;

//Middleware
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(morgan('tiny'));
app.use(bodyParser.json());

//serve static files
app.use(express.static('./client_dist/'));

app.get('/', (req, res) => {
  res.send('This is the Connect Four server!');
});

app.listen(port, () => console.log('listening on port', port));
