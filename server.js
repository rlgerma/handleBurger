var express = require("express");
var path = require("path");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static(__dirname, "public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgersController.js");

app.use(routes);

app.listen(PORT, function() {

console.log("Server listening on: http://localhost:" + PORT);
});
