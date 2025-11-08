--> verify installation

node -v
npm -v

--> Create a new directory for your project and initialize it with npm by running.

mkdir node-project
cd node-project

--> This will generate a package.json file, which is essential for managing your project dependencies.

npm init -y

--> Creating Application with npm init and Installed Modules
Step 1: Initialize a NodeJS Project

mkdir my-node-app
cd my-node-app
npm init -y

Step 2: Install Required Modules
We will install fs (for handling file operations) and path (for working with file paths).

<npm install fs path>

Step 3: Create an index.js File
Create a simple HTTP server that reads and serves a file.

import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, "message.txt");

    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Error reading file");
        } else {
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end(data);
        }
    });
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});

Step 4: Create a message.txt File
Create a message.txt file in the same directory and add some content:

Hello, this is a Node.js application without Express!

Step 5: Run the Application

node index.js


--> Creating Web-based Node Application
A web-based Node application consists of the following three important components:

1. Import required module
2. Create server
3. Read Request and return response

Step 1: Import required modules
Load Node modules using the required directive. Load the http module and store the returned HTTP instance into a variable.

Syntax:

var http = require("http");

Step 2: Creating a server in Node
Create a server to listen to the client's requests. Create a server instance using the createServer() method. Bind the server to port 8080 using the listen method associated with the server instance.

Syntax:

http.createServer().listen(8080);

Step 3: Read request and return response in Node
Read the client request made using the browser or console and return the response. A function with request and response parameters is used to read client requests and return responses.

Syntax:

http.createServer(function (request, response) {...}).listen(8080);

step 4: Create an index.js File


var http = require('http');
 
http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'});
    
    res.end('Hello World!');

}).listen(8080);

Step 5: To run the program type the following command in terminal

node index.js 


--> Core Components of a Node-First Application
Backend (NodeJS with Express.js/NestJS/Koa.js): The backend serves as the core processing unit, handling API requests, database interactions, and authentication mechanisms.
Database (MongoDB, PostgreSQL, MySQL, Redis): A Node-First approach commonly utilizes NoSQL databases like MongoDB for scalability, though SQL databases like PostgreSQL or MySQL are also widely used.
Frontend (React, Vue.js, Angular): Although frontend technologies can vary, JavaScript frameworks like React.js, Vue.js, and Angular work seamlessly with a Node-powered backend.
Authentication & Security: Utilizing JWT (JSON Web Tokens), OAuth, or session-based authentication ensures secure user interactions.
Real-Time Capabilities (Socket.io, WebRTC): For real-time applications like chat apps or live updates, Socket.io provides seamless WebSocket communication.