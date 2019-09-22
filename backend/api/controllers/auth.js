const User = require('../models/User.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/config.js');
const logger = require('../../logger/index.js');

module.exports.login = async function (req, res) {
  let user = await User.findOne({login: req.body.login});
  if (!user) {
    res.status(400).send("No user with this credentials");
    return
  }
  let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
  if (!passwordIsValid) {
    res.status(400).send("No user with this credentials");
    return
  }
  try {
    let accessToken = jwt.sign(
      {
        id: user._id,
        login: user.login,
        isMaster: user.access.isMaster,
        accessLevel: user.access.level
      },
      config.jwt.accessKey,
      { expiresIn: config.jwt.accessLive }
    );
    let refreshToken = jwt.sign(
      {
        id: user._id,
        login: user.login,
      },
      config.jwt.refreshKey,
      { expiresIn: config.jwt.refreshLive }
    );
    let result = await User.updateOne(user, { $set: { refreshToken: refreshToken } });
    let response = {
      message: "Your tokens successfully created",
      accessToken: accessToken,
      refreshToken: refreshToken
    };
    res.status(201).send(response);
  } catch (error) {
    logger.logError(error);
    res.status(500).send("Can't log in. Try again later.");
  }
}

module.exports.register = async function (req, res) {
  let user, email, login;
  email = await User.findOne({email: req.body.email});
  login = await User.findOne({login: req.body.login});
  if (email || login) {
    res.status(409).send("User already exist");
    return
  }
  let password;
  if (req.body.password) {
    let salt = bcrypt.genSaltSync(10);
    password = bcrypt.hashSync(req.body.password, salt);
  }
  /* Fix for nesting problem like handling undefined.isMaster */
  let access = { isMaster: false, level: 0 };
  if (req.body.access) {
    if (req.body.access.isMaster) access.isMaster = req.body.access.isMaster;
    if (req.body.access.level) access.level = req.body.access.level;
  }
  /* Check for admin key when create new admin. */
  if (access.isMaster && (req.body.masterKey != config.masterKey) ) {
    res.status(401).send("Your master key is wrong");
    return
  }
  /* Create new user */
  try {
    user = await new User({
      name: {
        firstname: req.body.name.firstname,
        lastname: req.body.name.lastname,
      },
      login: req.body.login,
      email: req.body.email,
      password: password,
      access: { isMaster: access.isMaster, level: access.level }
    }).save();
    res.status(201).send(`New user created`);
  } catch (error) {
    logger.logError(error);
    res.status(500).send("Can't create new user. Try again later.");
  }
}


module.exports.refreshToken = async function(req, res) {
  try {
    let token = req.body.refreshToken;
    let decodedRToken = jwt.verify(token, config.jwt.refreshKey);
    let user = await User.findOne({_id: decodedRToken.id});
    if (token == user.refreshToken) {
      /* Same logic in login */
      let accessToken = jwt.sign(
        {
          id: user._id,
          login: user.login,
          isMaster: user.access.isMaster,
          accessLevel: user.access.level
        },
        config.jwt.accessKey,
        { expiresIn: config.jwt.accessLive }
      );
      let refreshToken = jwt.sign(
        {
          id: user._id,
          login: user.login,
        },
        config.jwt.refreshKey,
        { expiresIn: config.jwt.refreshLive }
      );
      let result = await User.updateOne(user, { $set: { refreshToken: refreshToken } });
      let response = {
        message: "Your tokens successfully refreshed",
        accessToken: accessToken,
        refreshToken: refreshToken
      };
      res.status(201).send(response);
    } else {
      res.status(400).send(`Outdated token`);
    }
  } catch (error) {
    res.status(400).send(`Invalid token`);
    logger.logError(error);
  }
}
