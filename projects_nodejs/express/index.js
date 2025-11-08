var express = require('express');
var app = express();
var path = require('path');


app.use(express.static('public'));

app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname,"index.html"));
})

// The above form submits the data to /process_get endpoint, with GET method.
// Hence we need to provide a app.get() method that gets called when the form is submitted.
app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.query.first_name,
      last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

// The form data is included in the request object. 
// This method retrieves the data from request.query array, and sends it as a response to the client.

var server = app.listen(3000, function () {
    console.log("Express App running at http://localhost:3000/");
});


// Now you can enter the First and Last Name and then click submit button to see the result and it should return the following result −

// Express App running at http://localhost:3000/
// { first_name: 'Sanjana', last_name: 'M S' }