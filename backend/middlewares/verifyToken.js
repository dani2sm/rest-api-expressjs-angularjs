let jwt = require('jsonwebtoken');
let jwt_secret = require(__dirname + '/../config/jwt.json').jwt_secret;
module.exports = function(req,res,next) {
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, jwt_secret, function(err, decoded) {
      if (err) { //failed verification.
        return res.json({"error": true});
      }
      req.decoded = decoded;
      next(); //no error, proceed
    });
  } else {
    // forbidden without token
    return res.status(403).send({
      "error": true
    });
  }
}