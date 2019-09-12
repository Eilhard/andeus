const Bestia = require('../models/BestiaTest.js');




module.exports.getAll = async function (req, res) {
  let bestiary = await Bestia.find();
  res.send(bestiary);
  // res.send('All besties');
}

module.exports.getById = async function (req, res) {
  let id = parseInt(req.params.id);
  let bestia = await Bestia.findOne({id: id});
  // let answer = besties.filter(item => item.id == id);
  // res.send(`Bestia with ID ${id}`);
  res.send(bestia)
}


module.exports.getByRace = function (req, res) {
  let race = req.params.race.toLowerCase();
  // let answer = besties.filter(item => item.race == race);
  // res.send(answer);
  res.send(`Bestia with race ${race}`);
}

module.exports.getByName = function (req, res) {
  let name = req.params.name.toLowerCase();
  // let answer = besties.filter(item => item.name == name);
  // res.send(answer);
  res.send(`Bestia with name ${name}`);
}

module.exports.create = function (req, res) {
  let bestia = new Bestia({
    id: req.body.id,
    name: req.body.name
  });
  bestia.save().then(response => {
    console.log(response);
    res.send(`New bestia created ${response}`);
  }).catch(err => console.log(err));

  // let bestia = {
  //   id: lastId += 1,
  //   name: req.body.name,
  //   race: req.body.race,
  //   lvl: req.body.lvl,
  //   hp: req.body.hp,
  //   energy: req.body.energy,
  //   loot: req.body.loot,
  // }
  // besties.push(bestia);
  // res.send(bestia);

}

module.exports.update = function (req, res) {
  let id = parseInt(req.params.id);
  // let index;
  // besties.forEach((item, itemIndex) => {
  //   if (item.id == bestiaId) {
  //     item.name = req.body.name;
  //     item.race = req.body.race;
  //     item.lvl = req.body.lvl;
  //     item.hp = req.body.hp;
  //     item.energy = req.body.energy;
  //     item.loot = req.body.loot;
  //     index = itemIndex;
  //   }
  // })
  // res.send(besties[index]);
  res.send(`Bestia with ID ${id} updated`);
}

module.exports.delete = function (req, res) {
  let id = parseInt(req.params.id);
  // besties = besties.filter(item => item.id != bestiaId);
  // res.send(besties);
  res.send(`Bestia with ID ${id} deleted`);
}
