const express = require('express');
const router = express.Router();
const app = express();
const mongoose = require('mongoose');
const config = require('./api/config/config.js');
const logger = require('./logger/index.js');

const path = require('path');
const bodyParser = require('body-parser');

app.use('/uploads', express.static('./uploads'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

/* DB */
mongoose.connect(config.mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }).then(() => console.log('MongoDB connected.'))
    .catch(error => console.log(error))

/* Routes */
const article = require('./api/routes/article.js');
const bestiary = require('./api/routes/bestiary.js');
const auth = require('./api/routes/auth.js');
const users = require('./api/routes/users.js');
const character = require('./api/routes/character.js');
app.use('/api/article', article);
app.use('/api/bestia', bestiary);
app.use('/api/auth', auth);
app.use('/api/users', users);
app.use('/api/character', character);

app.use(logger.logErrorGlobal);

app.listen(config.port, config.ip, () => { console.log(`Server initiated on ${config.ip}:${config.port}`); })
