const express = require('express');
const router = express.Router();
const app = express();

const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');

app.use(favicon(path.join(__dirname, 'img', 'favicon.ico')));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

/* Routes */
let bestiary = require('./routes/bestiary.js');
app.use('/bestia', bestiary);

app.get('/', (req, res) => {
  res.send("Hello from Andeus API");
})

app.listen(3000, '0.0.0.0', () => { console.log("Api initiated"); })
