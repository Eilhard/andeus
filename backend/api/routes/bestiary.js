const express = require('express');
const router = express.Router();
const controller = require('../controllers/bestiary.js');
const guard = require('../middleware/guard.js');
const upload = require('../middleware/upload.js');

/* /api/bestia */

router.get('', guard.jwt, controller.getAll);
router.get('/:id', guard.jwt, controller.getById);

/* Admin routes */
router.post('', guard.master, upload.single('image'), controller.create);
router.patch('/:id', guard.master, upload.single('image'), controller.update);
router.delete('/:id', guard.master, controller.deleteById);

module.exports = router;
