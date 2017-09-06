const Role = require('../models').roles;

module.exports= {
  //Get a list of all roles using model.findAll()
  index(req, res) {
    Role.findAll({
      // include: Book
    })
        .then(function (roles) {
          res.status(200).json(roles);
        })
        .catch(function (error) {
          res.status(500).json(error);
        });
  },

  //Get an role by the unique ID using model.findById()
  show(req, res) {
    Role.findById(req.params.id, {
      // include: Book
    })
        .then(function (role) {
          res.status(200).json(role);
        })
        .catch(function (error){
          res.status(500).json(error);
        });
  },

  //Create a new role using model.create()
  create(req, res) {
    Role.create(req.body)
        .then(function (newPost) {
          res.status(200).json(newPost);
        })
        .catch(function (error){
          res.status(500).json(error);
        });
  },

  //Edit an existing role details using model.update()
  update(req, res) {

    console.log(req.body);
    console.log(req.params.id);

    Role.update(req.body, {
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

  //Delete an existing role logically
  delete(req, res) {
    console.log(req.body);
    console.log(req.params.id);
    req.body.isDeleted = true;
    Role.update(req.body, {
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
  //Delete an existing role by the unique ID using model.destroy()
  destroy(req, res) {
    Role.destroy({
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