const Character = require('../models/Character.js');
const User = require('../models/User.js');
const logger = require('../../logger/index.js');

module.exports.getAll = async function (req, res) {
  try {
    let character = await Character.find({user: req.user.id});
    res.send(character);
  } catch (error) {
    logger.logError(error);
    res.status(500).send("Can't get data. Try again later.");
  }
}

module.exports.getById = async function (req, res) {
    try {
      let character = await Character.findOne({_id: req.params.id});
      res.send(character);
    } catch (error) {
      logger.logError(error);
      res.status(500).send("Can't get data. Try again later.");
    }
}

module.exports.create = async function (req, res) {
  let money = [];
  if (req.body.money) money = req.body.money;
  let experience = [];
  if (req.body.experience) experience = req.body.experience;
  try {
    let character = await new Character({
      user: req.user.id,
      nickname: req.body.nickname || req.body.name.firstname || "Unknown",
      name: {
        firstname: req.body.name.firstname || "Unknown",
        lastname: req.body.name.lastname || "Wanderer",
      },
      gender: req.body.gender || "Unknown",
      age: req.body.age,
      attributes: {
        strength: req.body.attributes.strength,
        agility: req.body.attributes.agility,
        dexterity: req.body.attributes.dexterity,
        intelligence: req.body.attributes.intelligence,
        vitality: req.body.attributes.vitality,
      },
      money: money,
      experience: experience
    }).save();
    await User.findOneAndUpdate({_id: req.user.id}, {$push: {characters: character._id}});
    res.send(character);
  } catch (error) {
    logger.logError(error);
    res.status(500).send("Can't create character. Try again later.");
  }
}

module.exports.update = async function (req, res) {

}
module.exports.delete = async function (req, res) {
  try {
    await Character.remove({_id: req.params.id});
    res.status(200).send({ id: req.params.id, message: "Character was successfully deleted" });
  } catch (error) {
    logger.logError(error);
    res.status(500).send("Can't create character. Try again later.");
  }
}
