import express from "express";
import dotenv from "dotenv";

// this tell the system to treat .env.loca as .env
dotenv.config({ path: "config/.env.local" });
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

//here the .env will be treaded as '.env.local'
const PORT = process.env.PORT || 4000;

function startServer() {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}

startServer();
