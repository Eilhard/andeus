const User = require('../models/User.js');
const logger = require('../../logger/index.js');

module.exports.getAll = async function (req, res) {
    let users = await User.find({});
    res.send(users);
}

/* Working only with guard.js need jwt token*/
module.exports.getByLogin = async function (req, res) {
    try {
      let user = await User.findOne({login: req.user.login});
      res.status(200).send(user);
    } catch (error) {
      logger.logError(error);
      res.status(500).send("Can't get data. Try again later.");
    }
}
