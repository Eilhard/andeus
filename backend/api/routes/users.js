const express = require('express');
const router = express.Router();
const controller = require('../controllers/users.js');
const guard = require('../middleware/guard.js');

/* User routes */
router.get('/me', guard.jwt, controller.getMe);
router.patch('/me', guard.jwt, controller.updateMe);

/* Admin routes */
router.get('', guard.jwt, guard.master, controller.getAll);
router.get('/:id', guard.jwt, guard.master, controller.getById);
router.delete('', guard.jwt, guard.master, controller.delete);

module.exports = router;
