var express = require('express');
var router = express.Router();
const User = require('../models').users;
const errorMessages = require('../util/errorMessages');


router.get('/:id?', function (req, res, next) {
    if (req.params.id) {
        return User.findById(id, {})
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
        return User.findAll({
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
    console.log(req);
    return User
        .create(req.body)
        .then((user) => res.status(201).send(user))
        .catch((error) => res.status(400).send(error));
});


router.delete('/:id', function (req, res, next) {
    return User
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
    console.log(req.body);
    console.log(req.params.id);
    User.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(function (updatedRecords) {
            res.status(200).json(updatedRecords);
        })
        .catch(function (error){
            res.status(500).json(error);
        });
});
module.exports = router;