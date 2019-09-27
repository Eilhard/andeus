const express = require('express');
const router = express.Router();
const controller = require('../controllers/article.js');
const upload = require('../middleware/upload.js');

router.get('', controller.getAll);
// router.get('/:id', controller.getById);
// router.get('/title/:title', controller.getByTitle);

router.post('', upload.single('image'), controller.create);

module.exports = router;
