const User = require('../models/User.js');
const Character = require('../models/Character.js');
const logger = require('../../logger/index.js');



/* Working only with guard.js need jwt token*/
module.exports.getMe = async function (req, res) {
    try {
      let user = await User.findOne({_id: req.user.id});
      res.status(200).send(user);
    } catch (error) {
      logger.logError(error);
      res.status(500).send("Can't get data. Try again later.");
    }
}
module.exports.updateMe = async function (req, res) {
  let updated = {};
  if (req.body.name) {
    updated.name = {};
    if (req.body.name.firstname) updated.name.firstname = req.body.name.firstname;
    if (req.body.name.lastname) updated.name.lastname = req.body.name.lastname;
  }
  try {
    let user = await User.findOneAndUpdate(
    {_id: req.user.id},
    {$set: updated},
    {new: true}
  );
    res.status(200).send(user);
  } catch (error) {
    logger.logError(error);
    res.status(500).send("Can't update data. Try again later.");
  }
}

/* Admin controllers */
module.exports.getAll = async function (req, res) {
    let users = await User.find({});
    res.send(users);
}

module.exports.getById = async function (req, res) {
    try {
      let user = await User.findOne({_id: req.params.id});
      res.status(200).send(user);
    } catch (error) {
      logger.logError(error);
      res.status(500).send("Can't get data. Try again later.");
    }
}

module.exports.delete = async function (req, res) {
  try {
    await User.remove({_id: req.params.id});
    await Character.remove({user: req.params.id});
    res.status(200).send({ id: req.params.id, message: "User was successfully deleted" });
  } catch (error) {
    logger.logError(error);
    res.status(500).send("Can't create character. Try again later.");
  }
}
