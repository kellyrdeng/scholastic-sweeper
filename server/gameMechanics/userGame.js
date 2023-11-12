/*This class starts a game and runs it until a mine is hit or all mines are found*/

const Grid = require("./grid.js")

const MINE = -1 
const FLAG = -2 
const BLANK = -3 
//click success return values, i used to do this with enum in Java but idk how to do it better in JS
const UNSUCCESS = -4 //out of bounds
const SUCCESS = -5
const GAMEEND = - 6
const WIN = -7

const OFFSET = [[-1, -1], [-1, 0], [-1, 1], //for neighbors of a cell
                [0,  -1],          [0,  1],
                [1,  -1], [1,  0], [1,  1]] 

class Game {

    constructor(difficulty = "beginner") { 
        this.grid = new Grid(difficulty)
    }

    getGrid() {
        return this.grid
    }

    //action can be right or left click
    static newMove(action, row, col, userGrid) {
        let grid = this.getGrid()

        if (userGrid.getBlanks() === grid.getSize() * grid.getSize()) { //first move
            grid.setAnswerGrid(this.safeFirstClick(row, col))
        }

        switch (action) {
            case "left":
                grid.click(row, col)
            case "right":
                if (grid.getUserGrid()[row][col] === BLANK) {
                    grid.flag(row, col)
                } else { //is a number
                    grid.chord(row, col)
                }
        }
        const object = {
            gameState: grid.getUserGrid(),
            answerGrid: grid.getAnswerGrid()
        }

        return object
    }

    safeFirstClick(row, column) {
        let grid = this.getGrid()
        let difficulty = grid.getDifficulty();

        //while first click is unsafe, keep generating new grids until it is safe
        while (this.getAnswerGrid()[row][column] === MINE) {
            let newGrid = new Grid(difficulty);
            grid.setAnswerGrid(newGrid.getAnswerGrid());
        }
        game.setGrid(grid)
        return answerGrid
    }

    //when # of blanks == minecount, we know the bombs are there so we can flag them
    fulfill(i, j) {
        let grid = this.getGrid()
        let answerGrid = grid.getAnswerGrid()
        let userGrid = grid.getUserGrid()

        let blanks = grid.countTarget(i, j, userGrid, BLANK)
        let flags = grid.countTarget(i, j, answerGrid, FLAG) //number of flags the user has places

        if (blanks !== answerGrid[i][j] - flags) { //cannot fulfill
            return
        }

        let touchedCells = new Set()
    
        //fulfill by placing flags on all the blanks
        let neighbors = grid.getNeighbors(i, j)
        for (let p = 0; p < neighbors.length; p ++) {
            let row = neighbors[p][0]
            let col = neighbors[p][1]
            if (!grid.outOfBounds(row, col) && userGrid[row][col] == BLANK) { //flag blank if not out of bounds
                grid.setUserGridCell(row, col, FLAG)
                
                //add neighbors of flag to touchedCells
                let touchedNeighbors = grid.getNeighbors(row, col)
                for (let d = 0; d < touchedNeighbors.length; d++) {
                    touchedCells.add(touchedNeighbors[d])
                }
            }
        }
        return touchedCells
    }
}

// let game = new Game("test") 
// let grid = new Grid("test") 
// grid.setUserGrid([[1,       1,   BLANK], 
//                   [1,     BLANK, BLANK],
//                   [BLANK, BLANK, BLANK]])
// grid.setAnswerGrid([[1,   1,  1], 
//                     [1, MINE, 1],
//                     [1,   1,  1]])
// game.setGrid(grid)

// grid.printGrid("answer")
// //grid.click(0, 0)
// console.log(game.fulfill(0, 0))
// grid.printGrid("user")
module.exports = Game