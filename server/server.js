// server/index.js

const express = require("express");
const cors = require("cors")

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors())
app.use(express.json())

app.post("/", (req, res) => {
  let json = req.body
  let action = json.action
  let userGrid = json.gameState
  let row = json.coords[0]
  let col = json.coords[1]
  
  let updatedState = newMove(action, row, col, userGrid)
  res.status(200).json(updatedState)
})

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});
  
app.listen(PORT, () => {
    console.log(`🚀🚀🚀 Server is up on ${PORT}`);
});