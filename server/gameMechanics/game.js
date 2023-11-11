/*This class starts a game and runs it until a mine is hit or all mines are found*/

const MINE = -1 
const FLAG = -2 
const BLANK = -3 
//click success return values, i used to do this with enum in Java but idk how to do it better in JS
const UNSUCCESS = -4 //out of bounds
const SUCCESS = -5
const GAMEEND = - 6

const OFFSET = [[-1, -1], [-1, 0], [-1, 1],
                [0,  -1],          [0,  1],
                [1,  -1], [1,  0], [1,  1]] 

class Game {

    constructor() { //initialize new game by prompting user for difficulty
        let difficulty = prompt("Type beginner, intermediate, or expert to select difficulty:")
        while (difficulty != "beginner"|| difficulty != "intermediate" || difficulty != "expert") {
            difficulty = prompt("Please type either beginner, intermediate, or expert.:")
        }
        this.grid = new Grid(difficulty)
    }

    getGrid() {
        return this.grid
    }

    newMove(action, row, col) {
        let grid = this.getGrid()
        switch (action) {
            case "click":
                return grid.click(row, col);
            case "flag":
                return grid.flag(row, col);
            case "chord":
                return grid.chord(row, col);
            default: //invalid input, out of bounds
                return UNSUCCESS;
        }
    }

    safeFirstClick(row, column) {
        let grid = this.getGrid()
        let difficulty = grid.getDifficulty();

        //while first click is unsafe, keep generating new grids until it is safe
        while (this.getAnswerGrid()[row][column] === MINE) {
            let newGrid = new Grid(difficulty);
            grid.setAnswerGrid(newGrid.getAnswerGrid());
        }
    }
}