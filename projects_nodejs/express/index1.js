// An object of the top level express class denotes the application object. 
// It is instantiated by the following statement −
var express = require('express');
var app = express();
// The Application object handles important tasks such as handling HTTP requests,rendering HTML views, and configuring middleware etc.


// The app.listen() method creates the Node.js web server at the specified host and port. 
// It encapsulates the createServer() method in http module of Node.js API.
//   app.listen(port, callback);


// Basic Routing
// The app object handles HTTP requests GET, POST, PUT and DELETE with app.get(), app.post(), app.put() and app.delete() method respectively.
//  The HTTP request and HTTP response objects are provided as arguments to these methods by the NodeJS server. 
//  The first parameter to these methods is a string that represents the endpoint of the URL. 
// These methods are asynchronous, and invoke a callback by passing the request and response objects.

// In the below example, we have provided a method that handles the GET request when the client visits '/' endpoint.
app.get('/',function(req,res){
// Request Object − The request object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on.

// Response Object − The response object represents the HTTP response that an Express app sends when it gets an HTTP request. 
// The send() method of the response object formulates the server's response to the client.

//You can print request and response objects which provide a lot of information related to HTTP request and response including cookies, sessions, URL, etc.


// The response object also has a sendFile() method that sends the contents of a given file as the response.
        res.send('hello world');
})

// Save the following HTML script as index.html in the root folder of the express app.
// <html>
// <body>
// <h2 style="text-align: center;">Hello World</h2>
// </body>
// </html>


// var server = app.listen(5000, function () {
//         console.log("Express App running at http://127.0.0.1:5000/");
// });

// This specific error means your browser is blocking the response, not that Express itself failed.
// Your Express server is working fine — it’s serving “hello world” — but something is intercepting or denying access.

// On macOS (especially Safari or Chrome), this happens in these common scenarios:
// 	1.	Using 127.0.0.1 instead of localhost:
// Some browsers interpret 127.0.0.1 differently due to local security sandboxing or proxy settings.
// 	2.	VPN or security software active:
// Tools like NordVPN, firewall apps, or antivirus can block local ports.
// 	3.	Port 5000 is reserved or already in use:
// Another app (like another Node, Python, or React app) may be using that port.


// so just the line to this::
var server = app.listen(3000, function () {
    console.log("Express App running at http://localhost:3000/");
});





