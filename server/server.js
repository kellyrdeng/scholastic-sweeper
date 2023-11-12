// server/index.js

const express = require("express");
const cors = require("cors");
const { default: Tutorial } = require("../client/src/Tutorial");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors())
app.use(express.json())

app.post("/", (req, res) => { //req sent from user to backend
  let json = req.body
  let action = json.action
  let userGrid = json.gameState
  let row = json.coords[0]
  let col = json.coords[1]
  
  let updatedState = newMove(action, row, col, userGrid) 
  res.status(200).json(updatedState) //new state sent from backend to user
})

app.get("/tutorial", (req, res) => {
  res.status(200).json(Tutorial)
})

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});
  
app.listen(PORT, () => {
    console.log(`🚀🚀🚀 Server is up on ${PORT}`);
});