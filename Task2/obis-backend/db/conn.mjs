import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb+srv://obis:obis-project@obis-results.cer3o.mongodb.net/?retryWrites=true&w=majority&appName=OBIS-results");

let conn;
try {
  conn = await client.connect();
  console.log("Successfully Connected to Mongo")
} catch(e) {
  console.error(e);
}

let db = conn.db("biodiversity_db");

export default db;