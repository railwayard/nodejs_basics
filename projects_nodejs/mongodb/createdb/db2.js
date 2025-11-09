// Create a new database
// To create a new database on the server, you need to call the db() method of MongoClient class.

// var dbobj = client.db(database_name, options);

// The db() method returns a db instance that represents the database on the server. 
// In the following example, we have demonstrated how to create a new database named as mydatabase in MongoDB.

const {MongoClient} = require('mongodb');


// 	The connection string tells Node.js:
// 	mongodb:// — use MongoDB protocol.
// 	localhost:27017 — connect to the MongoDB server running locally on port 27017.
// 	mydb — use or create a database called mydb.
//Define an async main() function
async function main(){
   const uri = "mongodb://localhost:27017/mydb";
   const client = new MongoClient(uri);

//    try {

// // Connect to MongoDB and call your helper function
//       // Connect to the MongoDB cluster

//       await client.connect();                       // await client.connect() — establishes a network connection.
//       await createdb(client, "mydatabase");         //  createdb() — a custom function you wrote to “create” or use a database called mydatabase.
//    } finally {

//     // Close the connection to the MongoDB cluster
//       await client.close();                          // This ensures that when you’re done, the connection is cleanly terminated.
//    }
// }

// main().catch(console.error);

// // The Helper Function

// // client.db(dbname) does not physically create a database immediately.
// // In MongoDB, databases and collections are created lazily — only once you store data in them.
// // It simply returns a handle (reference) to a database named "mydatabase".
// // The console.log(dbobj) prints that large internal object you saw earlier — it’s not an error, just internal state.
// async function createdb(client, dbname){
//    const dbobj = await client.db(dbname);
//    console.log("Database created");
//    console.log(dbobj);
// }

// Output :

// Db {
//   s: { ... },
//   client: MongoClient { ... }
// }
// is just the internal structure of the database object returned by:
// const dbobj = await client.db(dbname);
// Node.js simply prints the entire object because you logged it.

// other way :

  try {
    await client.connect();
    await createDatabase(client, "mydatabase");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  } finally {
    await client.close();
  }
}

async function createDatabase(client, dbname) {
  const db = client.db(dbname);
  console.log(`✅ Database '${dbname}' is ready.`);

  // To actually create it, let's add a dummy collection:
  await db.createCollection("tempCollection");
  console.log("📂 Collection 'tempCollection' created.");
}

main().catch(console.error);


// o/p:
// ✅ Database 'mydatabase' is ready.
// 📂 Collection 'tempCollection' created.

	// Connected successfully to your local MongoDB server (mongodb://localhost:27017).
	// Created or accessed a database named mydatabase (MongoDB creates a database the first time data is inserted).
	// Created a temporary collection called tempCollection to ensure the database exists physically on disk.
	// Then closed the connection cleanly.
