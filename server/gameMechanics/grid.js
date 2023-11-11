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

class Grid {

    constructor(difficulty) {
        this.difficulty = difficulty
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

    getBlanks() { //current num of blanks (usergrid)
        return this.blanks 
    }

    getDifficulty() {
        return this.difficulty
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

    setUserGridCell(row, column, value) {
        this.userGrid[row][column] = value 
    }

    // GENERATE GRIDS =============================================================================

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
                if (answerGrid[i][j] === -1) {
                    continue;
                }
                answerGrid[i][j] = this.countTarget(i, j, answerGrid, -1)
            }
        }
    }

    // GAME MECHANICS ======================================================================

    //changes user grid for one click
    click(row, col) {
        if (this.outOfBounds(row, col)) {
            return UNSUCCESS
        }

        let answerGrid = this.getAnswerGrid()
        let answerCellValue = answerGrid[row][col]

        switch (answerCellValue) {
            case MINE:
                this.setUserGridCell(row, col, MINE)
                return GAMEEND

            case 0:
                this.zeroCellBFS(row, col)
                return SUCCESS

            case FLAG:
                return SUCCESS

            default: //regular minecount
                if (this.getUserGrid()[row][col] === answerCellValue) { //already been clicked/revealed
                    return this.chord(row, col)
                } else { 
                    this.setUserGridCell(row, col, answerCellValue) //reveal minecount
                    this.decrementBlanks()
                    return SUCCESS
                }
        }
    }

    //for the user to mark where they think a mine might be by right clicking
    flag(row, col) {
        //check if out of bounds
        if (this.outOfBounds(row, col)) {
            return UNSUCCESS
        }

        let userCellValue = this.getUserGrid()[row][col]

        switch (userCellValue) {
            case FLAG: //if it was already a flag, then unflg it
                this.setUserGridCell(row, col, BLANK)
                return SUCCESS
            
            case MINE: //same as blank

            case BLANK: //set a flag
                this.setUserGridCell(row, col, FLAG)
                return SUCCESS

            default: //minecount already revealed, can't flag over a revealed cell so do nothing
                return SUCCESS
        }
    }

    //when clicking a cell whose minecount has already been revealed, you can:
    //a) reveal minecounts of neighboring cells if all neighboring mines have already been found
    //b) do nothing if not all mines have been found yet (maybe flash cells in future implementation)
    chord(i, j) {
        let minecount = this.getAnswerGrid()[i][j]
        let userGrid = this.getUserGrid()
        let flags = this.countTarget(i, j, userGrid, FLAG) //flags currently marked around (i, j)

        //mines not all found or cell not yet revealed, so can't chord (do nothing)
        if (flags !== minecount || userGrid[i][j] === BLANK) {
            return SUCCESS
        }

        //mines all found, click all other neighbor cells (it will reveal nonzeros, do bfs for 0s)
        for (let p = 0; p < OFFSET.length; p++) {
            let point = OFFSET[p]
            let row = i + point[0]
            let column = j + point[1]

            if (this.outOfBounds(row, column)) { //neighbor is out of boundaries
                continue
            }

            if (userGrid[row][column] === BLANK) {
                let c = click(row, column) //can be const SUCCESS, UNSUCCESS, OR GAMEEND
                if (c === GAMEEND) {
                    return c
                }
            }
        }
        return SUCCESS
    }

    //if a 0 cell is clicked, it reveals adjacent 0s and then one more layer of cells adjacent to those 0s
    zeroCellBFS(i, j) {
        let queue = [] //push() to enqueue, shift() to dequeue
        let visited = new Set() //stores unique integer key for each cell
        let answerGrid = this.getAnswerGrid()
        let userGrid = this.getUserGrid()
        let size = this.getSize()

        queue.push([i, j]) //each cell represented as 2 item arr
        visited.add(i * size + j) //unique key to store in set

        while (queue.length > 0) {
            let cur = queue.shift() //dequeue a 2 item arr representing next cell to process
            let minecount = answerGrid[cur[0]][cur[1]]
            this.setUserGridCell(cur[0], cur[1], minecount) //reveal cell

            if (minecount === 0) {
                for (let p = 0; p < OFFSET.length; p++) { //process neighbors of cur
                    let point = OFFSET[p]
                    let row = cur[0] + point[0]
                    let col = cur[1] + point[1]

                    if (this.outOfBounds(row, col)) {
                        continue
                    }

                    let neighbor = [row, col]
                    let neighborInt = neighbor[0] * size + neighbor[1]//unique integer key to store in set

                    //add neighbor to queue if not yet visited or revealed
                    if (!visited.has(neighborInt) && userGrid[row][col] === BLANK) {
                        queue.push(neighbor)
                        visited.add(neighborInt)
                    }
                }
            }
        }
        this.setBlanks(this.getBlanks() - visited.size) //decrement all the cells we revealed
        //may or may not be a bug here i forgor... prolly not.....
    }

    // HELPERS =============================================================================

    //prints grid contents in a format more readable to users
    printGrid(whichGrid) { //whichGrid string can be "user" or "answer"
        let size = this.getSize()
        let grid = null
        if (whichGrid === "user") {
            grid = this.getUserGrid()
        } else {
            grid = this.getAnswerGrid()
        }

        console.log("") //this looks weird if you only print 1 grid but it essential if you print multiple
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

    //counts the number of immediate neighbors with mines OR flags (depending on the target var passed in)
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
grid.click(0, 0)
grid.printGrid("user") 