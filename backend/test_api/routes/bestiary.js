const express = require('express');
const router = express.Router();

const fs = require('fs');
const path = require('path');
const datafunc = require(path.resolve(__dirname, '../functions/datafunc.js'));

let besties = []

let dataFile = path.resolve(__dirname, '../localData/besties_data.json');

let fileBuf = fs.readFileSync(dataFile, 'utf8');
fileBuf = JSON.parse(fileBuf);
fileBuf.besties.forEach(bestia => besties.push(bestia));

let lastId = besties.reduce((max, item) => { if (item.id > max) { return item.id} else { return max } }, 0);

let seconds = 20;
setInterval(() => {
  datafunc.saveLocalData(dataFile, 'besties', besties);
}, seconds * 1000);


router.get('', (req, res) => {
  res.send(besties);
});

router.get('/:id', (req, res) => {
  let id = req.params.id;
  let answer = besties.filter(item => item.id == id);
  res.send(answer);
});

router.get('/race/:race', (req, res) => {
  let race = req.params.race.toLowerCase();
  let answer = besties.filter(item => item.race == race);
  res.send(answer);
});

router.get('/name/:name', (req, res) => {
  let name = req.params.name.toLowerCase();
  let answer = besties.filter(item => item.name == name);
  res.send(answer);
});

router.post('', (req, res) => {
  let bestia = {
  id: lastId += 1,
  name: req.body.name,
  race: req.body.race,
  lvl: req.body.lvl,
  hp: req.body.hp,
  energy: req.body.energy,
  loot: req.body.loot,
}
  besties.push(bestia);
  res.send(bestia);
});

router.patch('/:id', (req, res) => {
  let bestiaId = parseInt(req.params.id);
  let index;
  besties.forEach((item, itemIndex) => {
    if (item.id == bestiaId) {
      item.name = req.body.name;
      item.race = req.body.race;
      item.lvl = req.body.lvl;
      item.hp = req.body.hp;
      item.energy = req.body.energy;
      item.loot = req.body.loot;
      index = itemIndex;
    }
  })
  res.send(besties[index]);
});

router.delete('/:id', (req, res) => {
  let bestiaId = parseInt(req.params.id);
  besties = besties.filter(item => item.id != bestiaId);
  res.send(besties);
});

/* Just test */
router.get('/img/fairy', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../img/bestiary/fairy.jpg'));
});


module.exports = router;
