import express from "express";
import cors from "cors";
import "express-async-errors";
import db from "./db/conn.mjs";

const PORT = 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/hotspots", async (req, res) => {
  let collection = await db.collection("biodiversity_hotspots");
  let results = await collection.find({ 'species_richness': { $gte: 100 } })
    .toArray();

  res.send(results).status(200);
});

app.get("/migration/:year", async (req, res) => {
  let collection = await db.collection("migration");
  let results = await collection.find({ 'date_year': { $eq: req.params.year } })
    .toArray();

  res.send(results).status(200);
});

app.get("/migrationInfo/:species", async (req, res) => {
  let collection = await db.collection("migration");
  let results = await collection.find({ 'scientificName': { $eq: req.params.species } })
    .toArray();

  res.send(results).status(200);
});

app.get("/migrationsAggregated/:year/:temperature", async (req, res) => {
  let collection = await db.collection("migration");
  let results = await collection.aggregate([
    {
      $match: {
        'temperature_region': req.params.temperature,
        'date_year': req.params.year,
      }
    },
    {
      $count: "total"
    }
  ]).toArray();

  res.send(results).status(200);
});

app.get("/shannon", async (req, res) => {
  let collection = await db.collection("shannon");
  let results = await collection.find({})
    .toArray();

  res.send(results).status(200);
});

app.get("/statistics", async (req, res) => {
  let collection = await db.collection("statistics");
  let results = await collection.find({ 'count_per_species': { $gte: 2000 } })
    .toArray();

  res.send(results).status(200);
});

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured.")
  console.log(err);
})

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});