const user = require('../models').users;

module.exports = {
    create : function(req, res) {
        return user
            .create({
                title: req.body.title,
            })
            .then((user) => res.status(201).send(user))
            .catch((error) => res.status(400).send(error));
    },

    list: function(req, res) {
        return user
            .findAll({
                order: [
                    ['createdAt', 'DESC'],
                ],
            })
            .then((users) => res.status(200).send(users))
            .catch((error) => res.status(400).send(error));
    },

    retrieve: function(id, res) {
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
    },

    update: function(req, res) {
        return user
            .findById(req.params.userId, {})
            .then(user => {
                if (!user) {
                    return res.status(404).send({
                        message: 'user Not Found',
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
    },

    destroy: function(req, res) {
        return user
            .findById(req.params.id)
            .then(user => {
                if (!user) {
                    return res.status(400).send({
                        message: 'user Not Found',
                    });
                }
                return user
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
};