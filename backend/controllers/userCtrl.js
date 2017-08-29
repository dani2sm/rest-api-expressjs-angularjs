var express = require('express');
var router = express.Router();
var userService  = require('../services/userServices');

router.get('/:id?', function (req, res, next) {
    if (req.params.id) {
        userService.retrieve(req.params.id, function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
    else {
        userService.list(function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
});