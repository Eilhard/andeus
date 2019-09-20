const express = require('express');
const router = express.Router();
const controller = require('../controllers/auth.js');


router.get('/article', controller.getAll);
router.get('/article/:id', controller.getById);
router.get('/article/:title', controller.getByTitle);


module.exports = router;
