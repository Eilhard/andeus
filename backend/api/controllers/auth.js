const User = require('../models/User.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


module.exports.login = function (req, res) {
  let id = parseInt(req.params.id);

  res.send(`User with ID ${id} `);
}

module.exports.create = async function (req, res) {
  let user = await User.findOne({email: req.body.email});
  if (user) {
    res.status(409).send("User already exist")
  } else {
    user = await new User({
      name: {
        firstname: req.body.name.firstname,
        lastname: req.body.name.lastname,
      },
      login: req.body.login,
      email: req.body.email,
      password: req.body.password
    }).save();
    res.status(201).send(`New user created ${user}`);
  }
}
