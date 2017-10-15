let  User = require('../models').users;
let jwt = require('jsonwebtoken');
let jwt_secret = "fsfsf";


module.exports = {
  //sign up using model.create()
  signup(req, res){

    let user = req.body;
    User.create(user)
        .then(function (newPost) {
          res.status(200).json(newPost);
        })
        .catch(function (error) {
          res.status(500).json(error);
        });

  },
  authenticate(req, res){
      console.log(req.body)
      User.findOne(req.body).lean().exec(function(err, user){
          if(err){
              return res.json({error: true});
          }
          if(!user){
              return res.status(404).json({'message':'User not found!'});
          }
          console.log(user);
          let token = jwt.sign(user, jwt_secret, {

    expiresIn: 1440 // expires in 1 hour

  });

  res.json({error:false, token: token});

})

},
  //Get a list of all users using model.findAll()
  index(req, res){
    User.findAll({
      // include: Book
    })
        .then(function (users) {
          res.status(200).json(users);
        })
        .catch(function (error) {
          res.status(500).json(error);
        });
  },
  //Get an user by the unique ID using model.findById()
  show(req, res){
    User.findById(req.params.id, {
      // include: Book
    })
        .then(function (user) {
          res.status(200).json(user);
        })
        .catch(function (error) {
          res.status(500).json(error);
        });
  },
  //Create a new user using model.create()
  create(req, res){
    User.create(req.body)
        .then(function (newPost) {
          res.status(200).json(newPost);
        })
        .catch(function (error) {
          res.status(500).json(error);
        });
  },
  //Edit an existing user details using model.update()
  update(req, res){

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
        .catch(function (error) {
          res.status(500).json(error);
        });
  },
  //Delete an existing user logically
  delete(req, res){
    console.log(req.body);
    console.log(req.params.id);
    req.body.isDeleted = true;
    User.update(req.body, {
      where: {
        id: req.params.id
      }
    })
        .then(function (updatedRecords) {
          res.status(200).json(updatedRecords);
        })
        .catch(function (error) {
          res.status(500).json(error);
        });
  },
  //Delete an existing user by the unique ID using model.destroy()
  destroy(req, res){
    User.destroy({
      where: {
        id: req.params.id
      }
    })
        .then(function (deletedRecords) {
          res.status(200).json(deletedRecords);
        })
        .catch(function (error) {
          res.status(500).json(error);
        });
  }
};