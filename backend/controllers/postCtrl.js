
const Post = require('../models').posts;

module.exports= {
  //Get a list of all posts using model.findAll()
  index(req, res) {
    Post.findAll({
      // include: Book
    })
        .then(function (posts) {
          res.status(200).json(posts);
        })
        .catch(function (error) {
          res.status(500).json(error);
        });
  },

  //Get an post by the unique ID using model.findById()
  show(req, res) {
    Post.findById(req.params.id, {
      // include: Book
    })
        .then(function (post) {
          res.status(200).json(post);
        })
        .catch(function (error){
          res.status(500).json(error);
        });
  },

  //Create a new post using model.create()
  create(req, res) {
    Post.create(req.body)
        .then(function (newPost) {
          res.status(200).json(newPost);
        })
        .catch(function (error){
          res.status(500).json(error);
        });
  },

  //Edit an existing post details using model.update()
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

  //Delete an existing post by the unique ID using model.destroy()
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