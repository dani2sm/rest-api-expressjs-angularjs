const express = require('express'),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    exphbs = require("express-handlebars"),
    routes = require("./controllers/taco_controller.js"),
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

db.sequelize.sync( /*{ force: true }*/ )
    .then(() => {
        app.listen(port, () => { console.log(`==> 🌎  Listening on PORT ${port}. Visit http://localhost:${port}`) });
    });