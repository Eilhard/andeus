const express = require('express');
const router = express.Router();
const controller = require('../controllers/auth.js');

/* /api/auth */
router.post('/login', controller.login);
router.post('/register', controller.register);
router.post('/refresh', controller.refreshToken);


module.exports = router;
