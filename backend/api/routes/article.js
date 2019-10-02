const express = require('express');
const router = express.Router();
const controller = require('../controllers/article.js');
const guard = require('../middleware/guard.js');
const upload = require('../middleware/upload.js');

/* /api/article */

router.get('', controller.getAll);
router.post('', guard.jwt, upload.single('image'), controller.create);
router.patch('/:id', guard.jwt, upload.single('image'), controller.update);
router.delete('/:id', guard.jwt, controller.deleteById);

module.exports = router;
