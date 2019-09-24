const express = require('express');
const router = express.Router();
const controller = require('../controllers/users.js');
const guard = require('../middleware/guard.js');

router.get('', guard.jwt, controller.getByLogin);

router.get('', guard.jwt, guard.master, controller.getAll);

module.exports = router;
