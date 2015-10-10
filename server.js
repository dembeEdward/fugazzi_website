var express = require('express');
var https = require('https');
var bodyParser = require('body-parser');
var request = require('request');

var app = express();
var address1 = "";
var address2 = "";
var distanceResult = {};

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Allow CORS (Cross Origin Resource Sharing)
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/getDistance', function(req, res){

	address1 = req.body.address1;
	address2 = req.body.address2;
	console.log("Addresses recieved");

	request('https://maps.googleapis.com/maps/api/distancematrix/json?origins='+ address1 +'&destinations='+ address2 +'&key=AIzaSyCVgE0rGwJ0_mxl_XgywwoMLjXqab-4Evg', 
		function (error, response, body) {
  			if (!error && response.statusCode == 200) {
    		distanceResult = body;
    		console.log("distant result found"); 
  		}
	});

	res.send(distanceResult);

});

app.listen(3000);
console.log("Server running on port 3000");