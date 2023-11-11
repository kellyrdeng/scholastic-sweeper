const MINE = -1 
const FLAG = -2 
const BLANK = -3 
const OFFSET = [[-1, -1], [-1, 0], [-1, 1],
                [0,  -1],          [0,  1],
                [1,  -1], [1,  0], [1,  1]] 

class Grid {

    constructor() {
        this.size = 9 
        this.blanks = 81 
        this.mines = 10 

        this.answerGrid = new Array(9).fill(0).map(() => new Array(9).fill(0)) 
        this.answerGrid = this.generateMines()
        
        //this.answerGrid = this.fillMinecount()
        this.userGrid = new Array(9).fill(0).map(() => new Array(9).fill(-3)) 
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
        return this.answerGrid
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
}

//let grid = new Grid() 
//grid.printGrid("answer") 