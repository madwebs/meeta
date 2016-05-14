var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	console.log(req.query)
	var user = 'tobi'+req.query.a;
	res.json({ 'user': user });
});

module.exports = router;
