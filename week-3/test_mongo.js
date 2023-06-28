const { MongoClient } = require("mongodb");

async function myFunction() {
  // Connect to MongoDB
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);
  await client.connect();

  try {
    // Get a reference to the collection
    const db = client.db("your_database_name");
    const collection = db.collection("your_collection_name");

    // Insert documents into the collection
    const documents = [{ name: "John Doe" }, { name: "Jane Smith" }];
    const result = await collection.insertMany(documents);
    console.log(`${result.insertedCount} documents inserted`);
  } finally {
    // Close the connection
    await client.close();
  }
}

myFunction();
