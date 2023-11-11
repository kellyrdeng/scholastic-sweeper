const MINE = -1 
const FLAG = -2 
const BLANK = -3 
const OFFSET = [[-1, -1], [-1, 0], [-1, 1],
                [0,  -1],          [0,  1],
                [1,  -1], [1,  0], [1,  1]] 

class Grid {

    constructor(difficulty) {
        switch (difficulty) {
            case "beginner":
                this.size = 9;
                this.blanks = 81;
                this.mines = 10;
                break;
            case "intermediate":
                this.size = 16;
                this.blanks = 256;
                this.mines = 40;
                break;
            case "expert":
                this.size = 24;
                this.blanks = 576;
                this.mines = 99;
                break;
            case "test":
                this.size = 3;
                this.blanks = 9;
                this.mines = 2;
                break;
            default:
                this.size = 9;
                this.blanks = 81;
                this.mines = 10;
        }

        this.answerGrid = new Array(this.size).fill(0).map(() => new Array(this.size).fill(0)) 
        this.generateMines()
        this.fillMinecount()
        this.userGrid = new Array(this.size).fill(0).map(() => new Array(this.size).fill(BLANK)) 
    }

    getAnswerGrid() {
        return this.answerGrid 
    }

    getUserGrid() {
        return this.userGrid 
    }

    getSize() {
        return this.size 
    }

    getMines() {
        return this.mines 
    }

    getBlanks() {
        return this.blanks 
    }

    setBlanks(blanks) {
        this.blanks = blanks 
    }

    setUserGrid(userGrid) {
        this.userGrid = userGrid 
    }

    decrementBlanks() {
        this.blanks = this.blanks - 1 
    }

    setUserGrid(row, column, value) {
        this.userGrid[row][column] = value 
    }

    //uses random num generator to select random indexes to place bombs
    generateMines() {
        let totalCells = this.getSize() * this.getSize()
        let seenBefore = new Set() 

        while (seenBefore.size < this.getMines()) {
            //rand number from 0 to totalCells
            let i = Math.floor(Math.random() * totalCells) 

            if (!seenBefore.has(i)){
                seenBefore.add(i) 
                let row = Math.floor(i / this.answerGrid.length) 
                let col = i % this.answerGrid.length 
                this.answerGrid[row][col] = MINE 
            }
        }
    }

    fillMinecount() {
        let answerGrid = this.getAnswerGrid()
        
        for (let i = 0; i < answerGrid.length; i++) {
            for (let j = 0; j < answerGrid.length; j++) {
                if (answerGrid[i][j] == -1) {
                    continue;
                }
                answerGrid[i][j] = this.countTarget(i, j, answerGrid, -1)
            }
        }
    }

    //everything above is for grid generation
    //====================================================================
    //everything below is helpers

    printGrid(whichGrid) { //whichGrid string can be user or answer
        let size = this.getSize()
        let grid = null
        if (whichGrid === "user") {
            grid = this.getUserGrid()
        } else {
            grid = this.getAnswerGrid()
        }

        let xIndexes = "   "
        for (let i = 0; i < size; i++) { //print index numbers for viewing
            xIndexes += i + " "
        }
        console.log(xIndexes + "\n")

        for (let i = 0; i < size; i++) {
            let row = i + "  "
            for (let j = 0; j < size; j++) {
                let value = grid[i][j] 
                switch (value) {
                    case MINE:
                        row += "* "
                        break 
                    case FLAG:
                        row += "F "
                        break 
                    case BLANK:
                        row += "- "
                        break 
                    default:
                        row += value + " "
                }
            }
            console.log(row) 
        }
    }

    //counts the number of immediate neighbors with mines OR flags (depending on the toCount var passed in)
    //for the point (i, j) using the offset const
    countTarget(i, j, grid, target) {
        let minecount = 0

        for (let p = 0; p < OFFSET.length; p++) {
            let point = OFFSET[p]
            let row = i + point[0]
            let col = j+ point[1]

            if (this.outOfBounds(row, col)) {
                continue
            }

            if (grid[row][col] === target) {
                minecount++
            }
        }
        return minecount
    }

    outOfBounds(row, col) {
        return row < 0 || col < 0 || row >= this.getAnswerGrid().length || col >= this.getAnswerGrid().length;
    }
}

let grid = new Grid("beginner") 
grid.printGrid("answer") 