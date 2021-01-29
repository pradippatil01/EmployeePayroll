const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./config/database.connect');
const router = require('./router/route');
// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

app.use('/', router);

// listen for requests
app.listen(3000, () => {
  console.log('server started with port');
  console.log('try to connect Database...');
  connection.connection();
})