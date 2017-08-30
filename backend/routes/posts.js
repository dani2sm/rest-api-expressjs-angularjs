const express = require('express'),
    router = express.Router(),
    post = require('../models').posts,
    errorMessages = require('../util/errorMessages');

router.get('/:id?', function (req, res, next) {
    if (req.params.id) {
        return post.findById(id, {})
            .then((post) => {
                if (!post) {
                    return res.status(404).send({
                        message: errorMessages.NOT_FOUND,
                    });
                }
                return res.status(200).send(post);
            })
            .catch((error) => res.status(400).send(error));
    }
    else {
        return post.findAll(
            {
                order: [['createdAt', 'DESC'],],
            })
            .then((posts) => {
                return res.json(posts);
            });
    }
});

router.post('/', function (req, res, next) {

    return post.create(req.body)
        .then((post) => res.status(201).send(post))
        .catch((error) => res.status(400).send(error));
});

router.post('/:id', function (req, res, next) {
    post.destroy(req.body, function (err, count) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(count);
        }
    });
});

router.delete('/:id', function (req, res, next) {
    Post.deletePost(req.params.id, function (err, count) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(count);
        }
    });
});

router.put('/:id', function (req, res, next) {

    Post.updatePost(req.params.id, req.body, function (err, rows) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
module.exports = router;