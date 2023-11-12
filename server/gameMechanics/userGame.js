/*This class starts a game and runs it until a mine is hit or all mines are found*/

const UserGrid = require("./userGrid.js")

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

class UserGame {

    constructor(game = null) { //initialize new game by prompting user for difficulty
        /*let difficulty = prompt("Type beginner, intermediate, or expert to select difficulty:")
        while (difficulty != "beginner"|| difficulty != "intermediate" || difficulty != "expert") {
            difficulty = prompt("Please type either beginner, intermediate, or expert.:")
        }*/
        this.grid = game ? new UserGrid(game.difficulty, game.answerGrid, game.userGrid) : new UserGrid()
    }

    getGrid() {
        return this.grid
    }

    setGrid(grid) { //for testing
        this.grid = grid
    }

    // //automated solving, cannot pause on steps
    // solveGrid(grid) {
    //     let userGrid = grid.getUserGrid()
    //     let answerGrid = grid.getAnswerGrid()
    //     let blanks = grid.getBlanks()
    //     let mines = grid.getMines()
    //     let success = 0


    //     while (blanks > mines && success !== GAMEEND) {
    //         if (userGrid.getBlanks() === grid.getSize() * grid.getSize()) { //first move
    //             this.safeFirstClick(0, 0) //always start with top left corner
    //         }
    //         success = game.solveNewMove(grid)
    //         grid.printGrid(userGrid)
    //     }

    //     if (success === GAMEEND) {
    //         console.log("LOSS")
    //     } else {
    //         console.log("WIN")
    //     }
    // }

    // solveNewMove(grid) {
    //     let userGrid = grid.getUserGrid()
    //     let answerGrid = grid.getAnswerGrid()

    //     //scan for patterns, if found, execute and display
    //     //fulfill and chord touched cells
    //     let touchedCells = game.patternScan()


    //     //if can't find patterns, calculate probability
    // }

    // patternScan() {
    //     let touchedCells = []
    //     touchedCells.push(game.oneCorner())
    //     return touchedCells
    // }

    // oneCorner() {
    //     let grid = this.getGrid()
    // }

    /*play() {
        let grid = this.getGrid()
        let blanks = grid.getBlanks();
        let mines = grid.getMines();
        let success = 0;

        while (blanks > mines && success != GAMEEND) {
            success = this.playNewMove(action, row, col)
            if (success === GAMEEND) {
                return GAMEEND
            }
        }
        return WIN
    }*/

    //action can be right or left click
     newMove(action, row, col, userGrid) {
        let grid = userGrid.getGrid()
        // console.log(grid.getBlanks())
        // console.log(grid.getSize())
        console.log(grid)
        if (grid.getBlanks() === grid.getSize() * grid.getSize()) { //first move
            this.safeFirstClick(row, col)
            // this.grid.setAnswerGrid(this.safeFirstClick(row, col))
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
            answerGrid: grid.getAnswerGrid(),
            game: userGrid
        }

        return object
    }

    safeFirstClick(row, column) {
        let grid = this.getGrid()
        let difficulty = grid.getDifficulty();

        //while first click is unsafe, keep generating new grids until it is safe
        while (this.grid.getAnswerGrid()[row][column] === MINE) {
            let newGrid = new UserGrid(difficulty);
            grid.setAnswerGrid(newGrid.getAnswerGrid());
        }
        // this.setGrid(grid)
        // return grid.getAnswerGrid()
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
module.exports = UserGame