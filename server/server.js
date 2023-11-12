// server/index.js

const express = require("express");
const cors = require("cors");
const tutorial = require("./tutorial/tutorial");
const Game = require("./gameMechanics/game");
const UserGame = require("./gameMechanics/userGame")

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
  res.status(200).json(tutorial)
})

app.get("/play", (req, res) => {
  const result = new Game()
  res.status(200).send(result.grid)
})

app.post("/play", (req, res) => {
  // console.log(req.body)
  const userGameState = new UserGame(req.body.game)
  // console.log(req.body.game)
  // console.log(req.body.game.grid?.userGrid) 
  // console.log(JSON.stringify({...userGameState.newMove(req.body.action, req.body.pos[0], req.body.pos[1], userGameState), game: userGameState}))
  const result = {...userGameState.newMove(req.body.action, req.body.pos[0], req.body.pos[1], userGameState)}
  res.status(200).send(result) 
  // res.status(200).send(new Game())
})

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});
  
app.listen(PORT, () => {
    console.log(`🚀🚀🚀 Server is up on ${PORT}`);
});