'use strict';
const express = require('express'),
    errorMessages = require('../util/errorMessages');

Post = require('../models/').posts;

module.exports= {
    //Get a list of all authors using model.findAll()
    index(req, res) {
        Post.findAll({
        })
            .then(function (authors) {
                res.status(200).json(authors);
            })
            .catch(function (error) {
                res.status(500).json(error);
            });
    },

    //Get an author by the unique ID using model.findById()
    show(req, res) {
        Post.findById(req.params.id, {
        })
            .then(function (author) {
                res.status(200).json(author);
            })
            .catch(function (error){
                res.status(500).json(error);
            });
    },

    //Create a new author using model.create()
    create(req, res) {
        Post.create(req.body)
            .then(function (newPost) {
                res.status(200).json(newPost);
            })
            .catch(function (error){
                res.status(500).json(error);
            });
    },

    //Edit an existing author details using model.update()
    update(req, res) {
        Post.update(req.body, {
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
    },

    //Delete an existing author by the unique ID using model.destroy()
    delete(req, res) {
        Post.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(function (deletedRecords) {
                res.status(200).json(deletedRecords);
            })
            .catch(function (error){
                res.status(500).json(error);
            });
    }
};