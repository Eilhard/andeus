const express = require('express');
const router = express.Router();
const controller = require('../controllers/bestiary.js');

// let lastId = besties.reduce((max, item) => { if (item.id > max) { return item.id} else { return max } }, 0);

router.get('', controller.getAll);
router.get('/:id', controller.getById);
router.get('/race/:race', controller.getByRace);
router.get('/name/:name', controller.getByName);

router.post('', controller.create);

router.patch('/:id', controller.update);

router.delete('/:id', controller.delete);

module.exports = router;
