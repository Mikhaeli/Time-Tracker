const {MongoClient, ObjectID} = require('mongodb');

const url = 'mongodb://localhost:27017/TimeTracker';

const dbName = 'myproject';

// Use connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
  if (err) {
    return console.log('Unable to connect');
  }
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});
