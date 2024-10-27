const { MongoClient } = require('mongodb');

// Connection URI
const uri = "mongodb+srv://obis:obis-project@obis-results.cer3o.mongodb.net/?retryWrites=true&w=majority&appName=OBIS-results";
const client = new MongoClient(uri);

async function connect() {
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        console.log("Connected to MongoDB!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

async function closeConnection() {
    await client.close();
    console.log("Connection to MongoDB closed.");
}

// Function to find documents
async function findDocuments(collectionName, query = {}) {
    try {
        const collection = client.db("biodiversity_db").collection(collectionName);
        const documents = await collection.find(query).toArray();
        return documents;
    } catch (error) {
        console.error("Error finding documents:", error);
    }
}

// Exporting functions
module.exports = {
    connect,
    closeConnection,
    findDocuments,
};
