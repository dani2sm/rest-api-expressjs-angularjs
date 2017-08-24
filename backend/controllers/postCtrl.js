'use strict';
const express = require('express'),
    db = require('../models');

const operations = {
	list: (req, resp)=>{
		const q = {
			userName: req.params.userName,
			...req.query
		}
		return postService
				.findAll(q)
				.then((data)=>{
					resp.status(200).json(data);
				});
	},
	get: (req, resp)=>{
		const id = req.params.id;
		return postService
				.findById(id)
				.then((data)=>{
					if(data) {
						resp.status(200).json(data);
					} else {
						resp.status(404).send(errorMessages.POST_NOT_FOUND);
					}
				});
	},
	create: (req, resp)=>{
		const post = req.body;
		post.id = req.params.userName;
		logger.info('About to create post ', post);
		return postService
				.create(post)
				.then((data)=>{
					resp.json(data);
				});
	},
	delete: (req, resp)=>{
		const id = req.params.id;
		logger.info('About to delete post ', id);
		return postService
				.deletePost(id)
				.then((affectedRows)=>{
					logger.info('rows deleted', affectedRows);
					resp.status(200).end();
				});
	},
	update: (req, resp)=>{
		const id = req.params.id;
		const post = req.body;
		post.id = id;
		return postService
				.update(post)
				.then((p)=>{
					resp.status(200).end();
				})
				.catch(e=>{
					resp.status(400).end();
				});
	}

}

export default operations;
