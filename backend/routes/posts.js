var express = require('express');
var router = express.Router();
var   posts = require('../controllers/postCtrl');

router.get('/', posts.index);
router.get('/:id', posts.show);
router.post('/', posts.create);
router.put('/:id', posts.update);
router.delete('/:id', posts.delete);

module.exports = router;