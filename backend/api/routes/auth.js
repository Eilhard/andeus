const express = require('express');
const router = express.Router();
const controller = require('../controllers/auth.js');


router.post('/login', controller.login);
router.post('/register', controller.create);



module.exports = router;
