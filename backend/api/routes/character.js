const express = require('express');
const router = express.Router();
const controller = require('../controllers/character.js');
const guard = require('../middleware/guard.js');

/* /api/character */

router.get('', guard.jwt, controller.getAll);

/* Admin routes */
router.get('/:id', guard.master, controller.getById);
router.post('', guard.master, controller.create);
router.patch('/:id', guard.master, controller.update);
router.delete('/:id', guard.master, controller.delete);

module.exports = router;
