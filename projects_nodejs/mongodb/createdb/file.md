MongoDB is an open-source, cross-platform document-oriented database environment. MongoDB uses JSON-like, schema-free documents. More than one documents form a collection, and one or more collections may be present in a MongoDB database. In this chapter, we whall learn how to create a MongoDB database with a Node.js application.

The MongoDB database management software is available in the following three editions −
* MongoDB Community − The source-available, free-to-use, and self-managed version of MongoDB, available for local installation, available for Windows, Linux, and macOS.
* MongoDB Enterprise − A commercial, subscription-based, self-managed version of MongoDB, with a lot of advanced features than the community edition.
* MongoDB Atlas − An on-demand, fully managed service for MongoDB deployments in the cloud. It runs on AWS, Microsoft Azure, and Google Cloud Platform.

# Connection strings
The mongodb driver for Node.js is imported into the code with the require() function. The object of MongoClient class represents a database connection. You need to pass a connection string to its constructor.

const { MongoClient } = require('mongodb');
const client = new MongoClient(ConnectionString);

The MongoDB connection string must be one of the following formats −
   * Standard Connection String Format − This format is used to connect to a self-hosted MongoDB standalone deployment, replica set, or sharded cluster. The standard URI connection scheme has the form −

mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]

The default connection string is −
mongodb://localhost:27017/

   * SRV Connection Format - A connection string with a hostname that corresponds to a DNS SRV record. MongoDB Atlas uses SRV connection format. MongoDB supports a DNS-constructed seed list. It allows more flexibility of deployment and the ability to change the servers in rotation without reconfiguring clients. The SRV URI connection scheme has the following form −

mongodb+srv://[username:password@]host[/[defaultauthdb][?options]]

Here is an example of SRV connection string −
const uri = "mongodb+srv://user:pwd@cluster0.zhmrg1h.mongodb.net/?retryWrites=true&w=majority";