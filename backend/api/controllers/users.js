const User = require('../models/User.js');

module.exports.getAll = async function (req, res) {
    let users = await User.find({});
    res.send(users);
}
