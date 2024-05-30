const keys = require("./key");
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { Pool } from "pg";

const app = express();
app.use(cors());
app.use(bodyParser.json());

//postgres setup
const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  port: keys.pgPort,
});

pgClient.on("connect", (client) => {
  client
    .query("CREATE TABLE IF NOT EXISTS values (number INT)")
    .catch((err) => console.error(err));
});

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/values/all", async (req, res) => {
  const vaules = await pgClient.query("SELECT * FROM values");

  res.send(vaules);
});

app.post("/values", async (req, res) => {
  if (!req.body.value) res.send({ working: false });

  const vaules = await pgClient.query("INSERT INTO values(number) VALUES($1)", [
    req.body.value,
  ]);

  res.send({ working: true });
});

app.listen(5000, () => {
  console.log("listening...");
});
