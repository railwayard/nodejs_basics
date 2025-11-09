
const { MongoClient } = require('mongodb');

async function main() {    
   const uri = "mongodb://localhost:27017/";
  
   const client = new MongoClient(uri);
   try {
      
      await client.connect();
		
      await listDatabases(client);
   } catch (e) {
      console.error(e);
   } finally {
    
      await client.close();
   }
}

main().catch(console.error);

async function listDatabases(client) {
   databasesList = await client.db().admin().listDatabases();
   console.log("Databases:");
   databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};


// // In the following example, we are using the standard connection string to fetch the list of databases.

// // This Node.js script uses the official MongoDB Node.js driver to:
// // 	1.	Connect to a MongoDB server running at mongodb://localhost:27017/.
// // 	2.	Ask the server for a list of databases.
// // 	3.	Print the database names to the console.
// // 	4.	Close the connection cleanly (even if errors occur).


// // Example: List of databases
// // The connect() method of MongoClient object returns a Promise. The call to connect() method is asynchronous. Next a function listdatabases() is called.


// // Imports the MongoClient class from the official mongodb npm package.
// // MongoClient is the entry point for connecting to a MongoDB server from Node.
// const { MongoClient } = require('mongodb');           // 1. Import MongoDB client class

// async function main() {                               // 2. main() is an async function (so we can use await)

//   	// The connection string (URI):
// 	// localhost means the server is on your machine. 27017 is the default MongoDB port.
// 	// If you use MongoDB Atlas or a remote server, this URI will be different (contains credentials, cluster address, options).
//    const uri = "mongodb://localhost:27017/";          // 3. Connection string (connects to local MongoDB)


//   	// Instantiates the client object. This does not open the network connection yet.
// 	// You can pass options to the constructor (timeouts, auth mechanism, poolSize, etc.).
//    const client = new MongoClient(uri)                // 4. Create a new MongoClient instance; it does NOT connect yet


//    try {

//     // 5. Connect to the MongoDB server (this returns a Promise; await pauses until connected)
//     // Connect to the MongoDB cluster

//     // Establishes a connection to the MongoDB server.
// 	// This is asynchronous — it returns a Promise, so we await it inside an async function.
// 	// If the server is not reachable, this call will throw (you’ll see ECONNREFUSED or server selection errors).
//       await client.connect();


// 	 // 6. Call the helper that asks the server for database list
//       // Make the appropriate DB calls
//       await listDatabases(client);
//    } catch (e) {
//     // 7. Handle errors: network problems, auth failures, server not running, etc.
//       console.error(e);
//    } finally {
//     // 8. Always close the client to free resources/connection pool
//       // Close the connection to the MongoDB cluster
//       await client.close();
//    }
// }

// main().catch(console.error); // 9. Run main() and catch any top-level unhandled rejections

// // Helper: queries admin interface for list of databases and prints them
// async function listDatabases(client) {


// // client.db() returns a Db object. If you call it without a database name, it uses the default (historically test; but for admin ops you don’t need a db name).
// // .admin() returns an object that exposes administrative commands.
// // .listDatabases() issues the listDatabases admin command and returns a Promise that resolves to an object describing databases found by the server. Typical shape:
// // client.db() returns a Db object. .admin() returns Admin object to perform admin operations.
//   databasesList = await client.db().admin().listDatabases();

// // {
// //   databases: [
// //     { name: 'admin', sizeOnDisk: ..., empty: false },
// //     { name: 'local', sizeOnDisk: ..., empty: false },
// //     { name: 'mydb', sizeOnDisk: ..., empty: false }
// //   ],
// //   totalSize: ...,
// //   ok: 1
// // }

// // 	•	The code iterates databasesList.databases and prints each db.name.

// // try { ... } catch (e) { ... } finally { await client.close(); }

// // 	•	try/catch handles runtime errors from await calls.
// // 	•	finally ensures you always close the connection, preventing resource leaks and leaving the driver in a clean state.

//   console.log("Databases:");
//   databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };