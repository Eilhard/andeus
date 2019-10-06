const express = require('express');
const router = express.Router();
const controller = require('../controllers/article.js');
const guard = require('../middleware/guard.js');
const upload = require('../middleware/upload.js');

/* /api/article */

router.get('', guard.jwt, controller.getAll);

/* Admin routes */
router.post('',  guard.master, upload.single('image'), controller.create);
router.patch('/:id', guard.master, upload.single('image'), controller.update);
router.delete('/:id', guard.master, controller.deleteById);

module.exports = router;
