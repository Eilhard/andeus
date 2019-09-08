const express = require('express');
const router = express.Router();
const app = express();
const history = require('connect-history-api-fallback');

const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

/* Routes */
let bestiary = require('./server/routes/bestiary.js');
app.use('/api/bestia', bestiary);

app.use(history());
app.use(express.static(path.join(__dirname, './public/')));

let config = {
    ip: '0.0.0.0',
    port: 18000
}
app.listen(config.port, config.ip, () => { console.log(`Server initiated on ${config.ip}:${config.port}`); })
