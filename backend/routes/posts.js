var express = require('express');
var router = express.Router();
  var   posts = require('../controllers/postCtrl');

app.get('/', posts.index);
app.get('/:id', posts.show);
app.post('/', posts.create);
app.put('/', posts.update);
app.delete('/', posts.delete);

module.exports = router;