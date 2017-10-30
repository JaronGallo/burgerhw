var express = require("express");
var override = require("method-override");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var handlebars = require("handlebars");
var router = require("./controllers/burger_controller.js");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));
app.use("/", router);


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});