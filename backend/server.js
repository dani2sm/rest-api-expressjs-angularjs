const express = require('express'),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    exphbs = require("express-handlebars"),
    routes = require("./controllers/taco_controller.js"),
    users = require('./routes/Users');
    sequelize = require('sequelize'),
    app = express(),
    port = process.env.PORT || 3000,
    db = require("./models");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/", routes);
app.use('/api/v1/users', users);

db.sequelize.sync( /*{ force: true }*/ )
    .then(() => {
        app.listen(port, () => { console.log(`==> 🌎  Listening on PORT ${port}. Visit http://localhost:${port}`) });
    });