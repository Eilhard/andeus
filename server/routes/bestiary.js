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

let lastAuthorId = besties.reduce((max, item) => { if (item.id > max) { return item.id} else { return max } }, 0);

datafunc.saveLocalData(dataFile, 'besties', besties);

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

});

router.patch('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.get('/img/fairy', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../img/bestiary/fairy.jpg'));
});


module.exports = router;
