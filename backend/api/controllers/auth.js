const User = require('../models/User.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/config.js');

module.exports.login = async function (req, res) {
  try {
    let user = await User.findOne({login: req.body.login, password: req.body.password});
    let token = jwt.sign({
      id: user._id,
      login: user.login,
      isMaster: user.access.isMaster,
      accessLevel: user.access.level
    }, config.jwtKey);
    res.send(`Bearer ${token}`);
  } catch (err) {
    res.status(403).send("No user with this credentials");
  }
}

module.exports.create = async function (req, res) {
  let user = await User.findOne({email: req.body.email});
  if (user) {
    res.status(409).send("User already exist");
    return
  }
  /* Fix for nesting problem like handling undefined.isMaster */
  let access = { isMaster: false, level: 0 };
  if (req.body.access) {
    if (req.body.access.isMaster) access.isMaster = req.body.access.isMaster;
    if (req.body.access.level) access.level = req.body.access.level;
  }
  /* Check for admin key when create new admin. */
  if (access.isMaster && (req.body.masterKey != config.masterKey) ) {
    res.status(403).send("Your master key is wrong");
    return
  }
  /* Create new user */
  user = await new User({
    name: {
      firstname: req.body.name.firstname,
      lastname: req.body.name.lastname,
    },
    login: req.body.login,
    email: req.body.email,
    password: req.body.password
  }).save();
  /* Add admin rights if user is admin*/
  if (access.isMaster) {
    try {
      let result = await User.updateOne(
        user,
        { $set: { access: { isMaster: true, level: access.level } } }
      );
    } catch (e) {
      console.log(e);
      res.status(500).send(`Error with rights module`);
    }
  }

  res.status(201).send(`New user created`);
}
