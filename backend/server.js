const express = require('express'),
    bodyParser = require("body-parser"),
    cookieParser = require('cookie-parser'),
    cors = require('cors'),
    logger = require('morgan'),
    methodOverride = require("method-override"),
    exphbs = require("express-handlebars"),
    routes = require("./controllers/taco_controller.js"),
    users = require('./routes/users');
    posts = require('./routes/posts');
    sequelize = require('sequelize'),
    app = express(),
    port = process.env.PORT || 3000,
    db = require("./models");


app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false }));

app.use(cookieParser());

app.use(express.static("public"));


app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/", routes);
app.use('/api/v1/users', users);
app.use('/api/v1/posts', posts);

db.sequelize.sync( /*{ force: true }*/ )
    .then(() => {
        app.listen(port, () => { console.log(`==> 🌎  Listening on PORT ${port}. Visit http://localhost:${port}`) });
    });