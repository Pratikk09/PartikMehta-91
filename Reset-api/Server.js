const express = require('express');
const app = express();
const { APP_PORT, DB_URL } = require('./config');
const routes = require('./routes');
const { default: mongoose } = require('mongoose');
const bodyParser = require('body-parser')

mongoose.connect(DB_URL)
  .then(() => console.log('Connected!'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())


app.use('/api',routes)
app.listen(APP_PORT, () => {
  console.log(`Server is running on port  ${APP_PORT}`);
});



