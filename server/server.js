// server/index.js

const express = require("express");
const cors = require("cors")

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors())
app.use(express.json())

app.post("/", (req, res) => {
  console.log(req.body)
})

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });
  
app.listen(PORT, () => {
    console.log(`🚀🚀🚀 Server is up on ${PORT}`);
});