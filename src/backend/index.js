import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/db.js";
import mainRouter from "./routes/router.js";

dotenv.config();

const app = express();
const port = process.env.APP_PORT || 8000;

app.use(express.json());
app.use(cors());

app.use(mainRouter);

// Test the connection to the database
pool.connect((err) => {
  if (err) {
    console.error("Error connecting to PostgreSQL", err);
  } else {
    console.log("Connected to PostgreSQL");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Api Users is running!");
});
