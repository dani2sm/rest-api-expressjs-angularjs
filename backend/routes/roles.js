var express = require('express');
var router = express.Router();
var   roles = require('../controllers/roleCtrl');

router.get('/', roles.index);
router.get('/:id', roles.show);
router.post('/', roles.create);
router.put('/:id', roles.update);
router.put('/delete/:id', roles.delete);
router.delete('/:id', roles.destroy);

module.exports = router;