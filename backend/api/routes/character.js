const express = require('express');
const router = express.Router();
const controller = require('../controllers/character.js');
const guard = require('../middleware/guard.js');

router.get('', guard.jwt, controller.getAll);
router.get('/:id', guard.jwt, controller.getById);
router.post('', guard.jwt, controller.create);
router.patch('/:id', guard.jwt, controller.update);
router.delete('/:id', guard.jwt, controller.delete);

module.exports = router;