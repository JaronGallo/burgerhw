var express = require("express");
var model = require("./../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
	model.selectAll(function(data) {
		
		console.log(data);
		res.render("index", {
			burgerData: data
		});
			
	});
});

router.post("/api/burgers", function(req, res) {
	model.insertOne(req.body.burger_name, function(result) {
    console.log(result);
    res.redirect('/');
	});
});
router.put("/burgers/update", function(req, res) {
  model.update(req.body.burger_id, function(result) {
    console.log(result);
    res.redirect('/');
  });
});

module.exports = router;
