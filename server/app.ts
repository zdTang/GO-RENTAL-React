import express from "express";
import dotenv from "dotenv";
import { dbConnection } from "./config/dbConnect";

import { startApolloServer } from "./apollo/apolloServer"; // Adjust the path as necessary
import { Express } from "express-serve-static-core";

// this tell the system to treat .env.loca as .env
dotenv.config({ path: "config/.env.local" });
const app = express();
app.use(express.json());
//dbConnection is an asynchronous, Am I supposed to use like this way ?????
dbConnection()
  .then(() => console.log("Mongo DB is starting..."))
  .catch((err) => console.error("Error starting server:", err));

app.get("/", (req, res) => {
  res.send("Hello World");
});

//here the .env will be treaded as '.env.local'
const PORT = process.env.PORT || 4000;

async function startServer() {
  await startApolloServer(app);
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}

startServer();
