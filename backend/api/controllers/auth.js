module.exports.login = function (req, res) {
  let id = parseInt(req.params.id);
  // let answer = besties.filter(item => item.id == id);
  res.send(`User with ID ${id} `);
}

module.exports.create = function (req, res) {
  res.send(`New user created`);
}
