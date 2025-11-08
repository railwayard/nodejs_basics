// To handle the POST data, we need to install the body-parser package from npm. Use the following command.
// npm install body-parser save


var express = require('express');
var app = express();
var path = require('path');

var bodyParser = require('body-parser');
// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));

app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname,"index.html"));
})

app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.query.first_name,
      last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})
// app.post("/process_post", )

app.post('/process_post', urlencodedParser, function (req, res) {
   const response = {
      first_name: req.body.first_name,
      last_name: req.body.last_name
   };
   console.log('POST Response:', response);
   res.end(JSON.stringify(response));
});


var server = app.listen(3000, function () {
    console.log("Express App running at http://localhost:3000/");
});


// This is a node.js middleware for handling JSON, Raw, Text and URL encoded form data.
// This package is included in the JavaScript code with the following require statement.
// var bodyParser = require('body-parser');


// The urlencoded() function creates application/x-www-form-urlencoded parser
// Create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false })


// Add the following app.post() method in the express application code to handle POST data.
// app.post('/process_post', urlencodedParser, function (req, res) {
//    // Prepare output in JSON format
//    response = {
//       first_name:req.body.first_name,
//       last_name:req.body.last_name
//    };
//    console.log(response);
//    res.end(JSON.stringify(response));
// })


