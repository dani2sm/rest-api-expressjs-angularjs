var express = require('express');
var router = express.Router();
const user = require('../models').users;
const errorMessages = require('../util/errorMessages');


router.get('/:id?', function (req, res, next) {
    if (req.params.id) {
        return user
            .findById(id, {})
            .then((user) => {
                if (!user) {
                    return res.status(404).send({
                        message: errorMessages.USER_NOT_FOUND,
                    });
                }
                return res.status(200).send(user);
            })
            .catch((error) => res.status(400).send(error));
    }
    else {
        return user.findAll({
                order: [
                    ['createdAt', 'DESC'],
                ],
            })
            .then((result) => {
                return res.json(result);
            });
    }
});

router.post('/', function (req, res, next) {

    return user
        .create({
            title: req.body.title,
        })
        .then((user) => res.status(201).send(user))
        .catch((error) => res.status(400).send(error));
});


router.delete('/:id', function (req, res, next) {
    return user
        .findById(req.params.id)
        .then(user => {
            if (!user) {
                return res.status(400).send({
                    message: errorMessages.USER_NOT_FOUND,
                });
            }
            return user
                .destroy()
                .then(() => res.status(204).send())
                .catch((error) => res.status(400).send(error));
        })
        .catch((error) => res.status(400).send(error));
});

router.put('/:id', function (req, res, next) {

    return user
        .findById(req.params.userId, {})
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: errorMessages.USER_NOT_FOUND,
                });
            }
            return user
                .update({
                    username: req.body.username || user.username,
                })
                .then(() => res.status(200).send(user))
                .catch((error) => res.status(400).send(error));
        })
        .catch((error) => res.status(400).send(error));
});
module.exports = router;