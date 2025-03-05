import express from "express";
import dotenv from "dotenv";

dotenv.config({ path: "config/.env.local" });
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

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
