const express = require('express');
const router = express.Router();
const app = express();
const mongoose = require('mongoose');
const config = require('./api/config/config.js');

const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

/* DB */
mongoose.connect(config.mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected.'))
  .catch(error => console.log(error))

/* Routes */
const bestiary = require('./api/routes/bestiary.js');
const auth = require('./api/routes/auth.js');
const users = require('./api/routes/users.js');
app.use('/api/bestia', bestiary);
app.use('/api/auth', auth);
app.use('/api/users', users);

let url = 'mongodb://localhost:27017/'


app.listen(config.port, config.ip, () => { console.log(`Server initiated on ${config.ip}:${config.port}`); })
