--> How NodeJS Works?

NodeJS is a runtime environment that allows JavaScript to run outside the browser. 
It is asynchronous, event-driven, and built on the V8 JavaScript engine, making it ideal for scalable network applications.

--> Key Features of NodeJS

Server-Side JavaScript: NodeJS allows JavaScript to run outside the browser, enabling backend development.
Asynchronous & Non-Blocking: Uses an event-driven architecture to handle multiple requests without waiting, improving performance.
Single-Threaded Event Loop: Efficiently manages concurrent tasks using a single thread, avoiding thread overhead.
V8 Chrome Engine: High performance, Open-Source Javascript web assembly engine developed by google and rewoned for compiling JS into native machine code to execute it with exceptional speed..
Scalable & Lightweight: Ideal for building microservices and handling high-traffic applications efficiently.
Rich NPM Ecosystem: Access to thousands of open-source libraries through Node Package Manager (NPM) for faster development.


--> Components of NodeJS Architecture

V8 Engine: Compiles JavaScript to machine code for fast execution.
Event Loop: Manages asynchronous tasks without blocking the main thread.
Libuv: Handles I/O operations, thread pool, and timers.
Non-Blocking I/O: Executes tasks without waiting for previous ones to complete.


--> Where to Use NodeJS?
NodeJS is best suited for applications that require high performance, scalability, and real-time processing. Below are some common use cases;;
Web APIs and Backend Services : Ideal for building RESTful APIs and GraphQL APIs. It also Used in backend services for mobile apps and web applications.
Real-Time Applications: Chat applications (e.g., WhatsApp, Slack). Live streaming services (e.g., Netflix, Twitch).
Microservices Architecture: It helps in developing scalable and independent services. It also used in cloud-based applications.
IoT (Internet of Things) Applications: Handles real-time data streaming from IoT devices. It is suitable for smart home automation and sensor-based systems.
Serverless Computing: Works well with AWS Lambda, Azure Functions, and Google Cloud Functions. Runs lightweight serverless functions efficiently.
Single-Page Applications (SPAs): It used in React, Angular, and Vue.js applications. It manages API requests efficiently in the backend.
Data-Intensive Applications: It used for big data processing and real-time analytics. It works well with NoSQL databases like MongoDB and Firebase.


--> Use Cases of Node.js
Here are some use cases of Node.js:
Real-Time Applications: Ideal for chat platforms, gaming, and collaborative tools that require instant data updates.
API Development: Efficiently handles multiple simultaneous requests, making it suitable for building RESTful APIs.
Single-Page Applications (SPAs): Support dynamic content loading without full page reloads, enhancing user experience.
Restful API and Microservices: It easily handles microservices and API due to its lightweight, scalable, and event-driven nature.
Streaming Applications(Netflix): Node.js processes large data streams without buffering, perfect for video and audio streaming.
Command-line tools: Node.js allows building a powerful CLI tool using npm libraries and cross-platform support.
IOT Solutions: It's asynchronous, event-driven, which helps manage multiple IoT device connections simultaneously.


--> Npm in Node.JS
NPM stands for Node Package Manager. When we install Node.js, it automatically installs NPM. When we are making any new project, we have to make a command in the terminal, such as

npm init   // init stands for initialization

It will create a package.json File. It records important metadata about a project, which is required before publishing to NPM, and also defines functional attributes of a project that NPM uses to install dependencies, run scripts, and identify the entry point to our package.

--> How Node.js Handles Client Requests (Based on Event Loop & Thread Pool)
When a client interacts with a web application, it sends a request to the web server. 
This request can either be blocking (synchronous) or non-blocking (asynchronous).
 Node.js uses an Event-Driven Architecture where all incoming requests are first placed into an Event Queue. 
 An Event Loop continuously monitors this queue and processes each request accordingly. 
 Understanding how Node.js handles these requests using the Event Queue, Event Loop, and Thread Pool is essential to optimizing performance and avoiding delays caused by blocking operations.

Follow Step-by-Step to send Request to Node.js Server :

The client sends a request to the Node.js web server to interact with the web application.
The request can be either blocking (synchronous) or non-blocking (asynchronous). 
Node.js receives the request and adds it to the Event Queue. Requests from different users (User 1, 2, 3, etc.) are added to the Event Queue.
Requests are picked in (FIFO – First In, First Out) order. 
If the request is non-blocking, it is processed immediately, and the response is sent back to the client. 
If the request is a blocking operation, it is passed to the Thread Pool.
The Thread Pool has a limited number of threads. 
If a thread is free, the blocking task is assigned to it.
Once the task is completed, the thread returns the result back to the Event Loop, which then sends the response to the client.
If all threads are busy, any new blocking requests must wait in a queue until a thread becomes free.
This waiting increases the response time for the client.
Therefore, it is always better to avoid blocking operations and use non-blocking alternatives whenever possible to maintain performance and scalability.

Note: A Thread is a worker who is working for us. Thread is responsible for working on our Blocking Request.

--> NodeJS Architecture
NodeJS follows a single-threaded event loop model that handles all client requests using a single thread. It is based on a non-blocking I/O model, meaning the server can process multiple requests without waiting for one task to complete before starting the next.

Event Loop: The event loop processes tasks without blocking, allowing NodeJS to handle many requests concurrently on a single thread.
Asynchronous Execution: Non-blocking functions are used for tasks such as reading from the file system or querying databases. This ensures the application remains responsive.


--> Basic NodeJS Concepts
1. Modules in NodeJS
NodeJS is built around the concept of modules. Modules in NodeJS are reusable pieces of code that can be imported into your application. These can be built-in modules (like fs for file system operations, http for HTTP server, etc.) or external packages installed using NPM.

Common NodeJS Modules : 
-- HTTP Module: The http module is used to create web servers. It allows you to handle requests and send responses.
-- FS (File System) Module: The fs module provides an API to interact with the file system. It can be used to read and write files, check for file existence, etc.
-- Path Module: The path module helps in handling and transforming file paths. It makes working with file systems easier and more cross-platform.
-- Event Module: The events module allows objects to emit and listen to events, which helps in writing event-driven applications.
-- Express Framework: While NodeJS provides basic capabilities, many developers use the Express framework, which simplifies routing, middleware integration, and HTTP request handling.

2. NodeJS uses an event loop to handle asynchronous operations. Rather than waiting for tasks (like I/O operations) to complete, NodeJS executes them in the background and moves on to other tasks. Once a task is complete, the corresponding callback is invoked. This non-blocking approach helps build highly responsive applications, especially useful for web servers and real-time applications


--> NodeJS REPL (READ, EVAL, PRINT, LOOP)

NodeJS REPL (Read-Eval-Print Loop) is an interactive shell that allows you to execute JavaScript code line-by-line and see immediate results. This tool is extremely useful for quick testing, debugging, and learning, providing a sandbox where you can experiment with JavaScript code in a NodeJS environment.

READ: You type some JavaScript code into the terminal, and REPL reads what you typed.
EVAL: REPL runs (evaluates) your code.
PRINT: REPL shows you the result of your code.
LOOP: REPL goes back to step 1, waiting for you to type more code.This loop continues until you quit REPL.

Action                  |     Command
Start Node REPL         |      node
Exit REPL               |      .exit or Ctrl + C twice
Clear screen            |      .clear
Save REPL session       |      .save filename.js
Load a file             |      .load filename.js


Creating Web-based Node Application

A web-based Node application consists of the following three important components:

- Import required module
- Create server
- Read Request and return response
- Let us learn more about them in detail

** Step 1: Import required modules

Load Node modules using the required directive. Load the http module and store the returned HTTP instance into a variable.

Syntax:
var http = require("http");

** Step 2: Creating a server in Node

Create a server to listen to the client's requests. Create a server instance using the createServer() method. Bind the server to port 8080 using the listen method associated with the server instance.

Syntax:
http.createServer().listen(8080);

** Step 3: Read request and return response in Node

Read the client request made using the browser or console and return the response. A function with request and response parameters is used to read client requests and return responses.

Syntax:
http.createServer(function (request, response) {...}).listen(8080);

** Step 4: Create an index.js File

var http = require('http');
 
http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'});
    
    res.end('Hello World!');

}).listen(8080);

** Step 5: To run the program type the following command in terminal

node index.js  


 - Callback

A Callback in Node.js is an asynchronous equivalent for a function. 
It is a special type of function passed as an argument to another function. 
Node.js makes heavy use of callbacks. 
Callbacks help us make asynchronous calls.
All the APIs of Node are written in such a way that they support callbacks.
Programming instructions are executed synchronously by default. 
If one of the instructions in a program is expected to perform a lengthy process, the main thread of execution gets blocked. 
The subsequent instructions can be executed only after the current I/O is complete. 
This is where callbacks come in to the picture.
The callback is called when the function that contains the callback as an argument completes its execution, and allows the code in the callback to run in the meantime. 
This makes Node.js highly scalable, as it can process a high number of requests without waiting for any function to return results.

=> The syntax of implementing callback in Node.js is as follows −

function function_name(argument, function (callback_argument){
   // callback body 
})
The setTimeout() function in Node.js is a typical example of callback. The following code calls the asynchronous setTimeout() method, which waits for 1000 milliseconds, but doesn't block the thread. Instead, the subsequent Hello World message, followed by the timed message.

Example:
setTimeout(function () { 
   console.log('This prints after 1000 ms'); 
}, 1000);

console.log("Hello World");


 - upload files

The Node.js is a good choice for handling the files-upload, Because of its non-blocking nature and ability to efficiently manage the concurrent requests.
In a Node.js application, the file uploading involves sending the files from the client (browser) to a server over HTTP. The server then processes the files, stores them in a specified location, or perform some action based on them. For this process, we will use the two main tools they are:

Express − It is a minimal web framework for handling the HTTP requests and responses.
Multer − It is a middleware that makes it easy to handle file uploads in Express.

=> tp.js

const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 1121;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    
    cb(null, './test');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });
if (!fs.existsSync('./test')) {
  fs.mkdirSync('./test');
}

app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded');
  }
  res.send(`File uploaded successfully: ${req.file.filename}`);
});
app.get('/', (req, res) => {
  res.send(`
    <h1>Upload a File</h1>
    <form action="/upload" method="post" enctype="multipart/form-data">
      <input type="file" name="file" />
      <button type="submit">Upload</button>
    </form>
  `);
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});