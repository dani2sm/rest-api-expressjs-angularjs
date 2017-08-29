var express = require('express');
var router = express.Router();
const user = require('../models').users;

router.get('/:id?', function (req, res, next) {
    if (req.params.id) {
        return user
            .findById(id, {})
            .then((user) => {
                if (!user) {
                    return res.status(404).send({
                        message: 'user Not Found',
                    });
                }
                return res.status(200).send(user);
            })
            .catch((error) => res.status(400).send(error));
    }
    else {
        return user
            .findAll({
                order: [
                    ['createdAt', 'DESC'],
                ],
            }).then((result) => {
                let hbsObject = { taco: result };
                return res.json(hbsObject);
            });
    }
});