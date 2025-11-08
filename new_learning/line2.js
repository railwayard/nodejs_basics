// --> hello world
// A “Hello, World!” program is the simplest way to get started with NodeJS. 
// Unlike the browser, where JavaScript runs inside the console, 
// NodeJs executes JavaScript in a server environment or via the command line.

console.log("Hello, World!");

// ---------------

// --> Single-Threaded Event Loop Model
// NodeJS operates on a single thread but efficiently handles multiple concurrent requests using an event loop;
// Client Sends a Request:  The request can be for data retrieval, file access, or database queries.
// NodeJS Places the Request in the Event Loop:  If the request is non-blocking (e.g., database fetch), it is sent to a worker thread without blocking execution.
// Asynchronous Operations Continue in Background:  While waiting for a response, NodeJS processes other tasks.
// Callback Execution:  Once the operation completes, the callback function executes, and the response is sent back to the client.
const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data); 
});

console.log("Reading file...");

// --> Explanation

// 1. const fs = require('fs');
// 	•	fs is Node’s File System module.
// 	•	It allows your program to read, write, update, delete files on your computer.
// 	•	The require('fs') line imports that module so you can use it in your code.

// 2. fs.readFile('file.txt', 'utf8', (err, data) => { ... });
// 	•	This function reads the content of the file named file.txt.
// 	•	'utf8' tells Node.js to interpret the file as text (not binary data).
// 	•	The last part — (err, data) => { ... } — is a callback function:
// 	•	err: will have an error object if something goes wrong (like file not found).
// 	•	data: will have the file’s content if everything is fine.

// Inside the callback:
// if (err) throw err; // Stop the program if an error occurs
// console.log(data);  // Print the contents of the file

// 3. console.log("Reading file...");

// This line executes immediately, before the file is actually read.
// Why?
// Because fs.readFile() is asynchronous — meaning it runs in the background and doesn’t block other code.
// So, Node.js will start reading the file, move on, and print "Reading file..." first.
// When the file reading is done, then the callback runs and prints the file’s content.

// Order of Execution

// When you run this:
// Reading file...
// <content of file.txt></content>

// Even though the fs.readFile() line comes before the console.log("Reading file...") line in the code,
// the file reading happens in the background, so the log prints first.

//  What This Teaches You
// 	•	How asynchronous I/O works in Node.js.
// 	•	The use of callbacks for handling tasks that take time (like file reading or network requests).
// 	•	That Node.js is non-blocking — it doesn’t wait for one operation to finish before starting another.

//  Visual Analogy

// Imagine you tell your friend:
// “Hey, read this book and tell me what’s inside. Meanwhile, I’ll make some tea.”

// Your friend starts reading (that’s the async task),
// You don’t stand there waiting — you go make tea (that’s the “Reading file…” log).
// Later, your friend finishes reading and tells you what’s inside (that’s the callback printing the file content).

// ---------------

// -->  Blocking or Synchronous Operation
// In a blocking or synchronous operation, tasks are executed one at a time in a specific sequence. 
// The program waits for the current task to complete before moving on to the next one. 
// This means if a task takes time—like reading a file or making a network request—the entire program waits until that task finishes. 
// While this approach is simple and easy to understand, it can slow down performance, especially when handling multiple requests or time-consuming operations.

// ---------------

// --> Here's an example to understand synchronous operations:

// The script uses fs.readFileSync() which blocks the execution which blocks the execution until the file (sync.txt) is completely read.
// It reads the file content in UTF-8 encoding and prints it using console.log(result);.
const fs=require('fs');
const result=fs.readFileSync('sync.txt','utf8');
console.log(result);

// In this example, the program will wait for fs.readFileSync() to finish reading the file before it moves on to the next line (console.log("File read complete.");). 
// If sync.txt is large or takes time to read, the entire program will be paused until that operation is done. 
// This can lead to inefficiencies, especially in a server environment where multiple requests need to be handled simultaneously.

// --> This shows the output of the synchronous file read from sync.txt. 
// The content eisha: +91 1111111111 and ruhi : +91 2222222222 is printed, which means the file read was completed before moving forward.

// --------------

// --> Creating Console-based Node Application
// 1. Running NodeJS with Console (No Setup Required)
// NodeJS allows developers to run JavaScript directly in the console without any setup. 
// We can start the NodeJS REPL (Read-Eval-Print Loop) by simply typing node in the terminal and running JavaScript commands interactively.

// $ node
// > let name = "Jiya";
// > console.log("Hello, " + name + "!");

// --> Getting Started with REPL
// To start working with the REPL environment of NodeJS, follow one of these two methods:

// Starting REPL in the Terminal or Command Prompt
// Open your terminal (for UNIX/Linux) or Command Prompt (for Windows).
// Type node and press 'Enter' to start the REPL.

// to exit,press ctrl+c again or type .exit.

// The REPL has started and is demarcated by the '>' symbol. Various operations can be performed on the REPL. Below are some of the examples to get familiar with the REPL environment.

// Key Features of NodeJS REPL
// Executing JavaScript Code
// The REPL is a full-featured JavaScript environment, meaning you can run any valid JavaScript code inside it.
// >let a = 1121;
// undefined
// > a * 2
// 2242

// Example:
// > const x = 10;> const y = 20;> x + y30
// You can declare variables, create functions, and run any code that would work in a regular JavaScript runtime.

// Variable Declarations
// In REPL, we can declare variables dynamically using the var, let or const. 
// It allows users to experiment with different variable scopes and behaviour without the need of separate script file. 
// Variables declared in the REPL continue throughout the session, making it useful for calculations and debugging

// Multi-Line Input
// In case of complex logic (like loops or functions), the REPL supports multi-line input. 
// When you enter a block of code, the REPL will continue reading input until the block is complete.

// When you’re using the Node.js REPL (the interactive shell where you type node in your terminal), 
// it can handle multi-line input — meaning, you can type functions, loops, or conditionals that span multiple lines.

// > function add(a, b) {
// ...   return a + b;
// ... }

// Notice the prompt changes from:
//  >
// to 
//  ...
// That “…” means Node is waiting for you to finish your block of code (for example, to close a { }).

//then you call it :
//  > add(5, 10)
//  15

// Here, the REPL waits for you to complete the function block before evaluating the code.

// Underscore (_) Variable
// The REPL provides a special variable _ (underscore) that stores the result of the last evaluated expression.

// Example:
// > 3 + 36> _ * 212
// In this case, the result of 3 + 3 is stored in _, which is then used in the next line to calculate 12.
// it automatically stores the last evaluated result in the special variable _.

// Example in Node REPL:

// > 3 + 3
// 6
// > _ * 2
// 12

// Explanation:
// 	1.	When you type 3 + 3, Node evaluates it to 6.
// 	2.	The result 6 is automatically stored in the special variable _.
// 	3.	When you type _ * 2, it becomes 6 * 2, so Node prints 12.

// 	•	_ only stores the result of the last expression you executed (not the last variable you defined).
// 	•	You can use _ just like any variable, but avoid reassigning it (_ = something) because it’ll overwrite the REPL’s behavior.
//  Try it yourself:

// > 10 + 5
// 15
// > _ - 3
// 12
// > _ * 2
// 24
// > 112 + 234
// 346
// > _ / 2
// 173



// Creating Application with npm init and Installed Modules
// Step 1: Initialize a NodeJS Project

// mkdir my-node-app
// cd my-node-app
// npm init -y

// Step 2: Install Required Modules

// We will install fs (for handling file operations) and path (for working with file paths).
// npm install fs path


