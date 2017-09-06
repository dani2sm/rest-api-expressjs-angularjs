var express = require('express');
var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var router = express.Router();
var   users = require('../controllers/userCtrl');

router.post('/signup', users.signup);
router.post('/authenticate', users.authenticate);
router.get('/', users.index);
router.get('/:id', users.show);
router.post('/', users.create);
router.put('/:id', users.update);
router.put('/delete/:id', users.delete);
router.delete('/:id', users.destroy);

module.exports = router;