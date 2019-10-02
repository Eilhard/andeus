const Bestia = require('../models/Bestia.js');
const logger = require('../../logger/index.js');

module.exports.getAll = async function (req, res) {
  try {
    let bestiary = await Bestia.find({});
    res.send(bestiary);
  } catch (error) {
    logger.logError(error);
    res.status(500).send("Can't get data. Try again later.");
  }
}

module.exports.getById = async function (req, res) {
  try {
    let bestia = await Bestia.findOne({ _id: req.params.id });
    res.send(bestia);
  } catch (error) {
    logger.logError(error);
    res.status(500).send("Can't update data. Try again later.");
  }
}

module.exports.create = async function (req, res) {
  try {
    const bestia = await new Bestia({
      name: req.body.name,
      race: req.body.race,
      lvl: req.body.lvl,
      hp: req.body.hp,
      energy: req.body.energy,
      description: req.body.description,
      imgSrc: req.file ? `${req.file.destination}/${req.file.filename}`  : '',
      loot: (typeof req.body.loot === 'string') ? JSON.parse(req.body.loot) : req.body.loot
    }).save();
    res.status(201).send(bestia);
  } catch (error) {
    res.status(500).send(`Can't create bestia.`);
    logger.logError(error);
  }
}

module.exports.update = async function (req, res) {
  let updated = {};
  if (req.body.name) updated.name = req.body.name;
  if (req.body.race) updated.race = req.body.race;
  if (req.body.lvl) updated.lvl = req.body.lvl;
  if (req.body.hp) updated.hp = req.body.hp;
  if (req.body.energy) updated.energy = req.body.energy;
  if (req.body.description) updated.description = req.body.description;
  if (req.file) updated.imgSrc = `${req.file.destination}/${req.file.filename}`;
  if (req.body.loot) updated.loot = (typeof req.body.loot === 'string') ? JSON.parse(req.body.loot) : req.body.loot;
  try {
    let bestia = await Bestia.findOneAndUpdate(
    {_id: req.params.id},
    {$set: updated},
    {new: true}
  );
    res.status(200).send(bestia);
  } catch (error) {
    logger.logError(error);
    res.status(500).send("Can't update data. Try again later.");
  }
}

module.exports.deleteById = async function (req, res) {
  try {
    await Bestia.deleteOne({_id: req.params.id})
    res.status(200).send({
      id: req.params.id,
      message: "Bestia deleted"
    });
  } catch (error) {
    logger.logError(error);
    res.status(500).send("Can't update data. Try again later.");
  }
}
