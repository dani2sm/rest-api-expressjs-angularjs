var express = require('express');
var router = express.Router();

var Posts = require('./controllers/userCtrl');

/*
router.post('/', function (req, res, next) {

    userService.addUser(req.body, function (err, count) {

        console.log(req.body);
        if (err) {
            res.json(err);
        }
        else {
            res.json(req.body);//or return count for 1 & 0
        }
    });
});

router.post('/:id', function (req, res, next) {
    userService.deleteAll(req.body, function (err, count) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(count);
        }
    });
});

router.delete('/:id', function (req, res, next) {
    User.deleteUser(req.params.id, function (err, count) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(count);
        }
    });
});

router.put('/:id', function (req, res, next) {

    User.updateUser(req.params.id, req.body, function (err, rows) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
module.exports = router;*/
