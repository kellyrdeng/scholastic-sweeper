//json isBuilt and set every time theBoard updates (1 step)
//initial grid of blanks

const initial = {
    gameState: [[-3, -3, -3, -3, -3, -3, -3, -3, -3],
                [-3, -3, -3, -3, -3, -3, -3, -3, -3],
                [-3, -3, -3, -3, -3, -3, -3, -3, -3],
                [-3, -3, -3, -3, -3, -3, -3, -3, -3],
                [-3, -3, -3, -3, -3, -3, -3, -3, -3],
                [-3, -3, -3, -3, -3, -3, -3, -3, -3],
                [-3, -3, -3, -3, -3, -3, -3, -3, -3],
                [-3, -3, -3, -3, -3, -3, -3, -3, -3],
                [-3, -3, -3, -3, -3, -3, -3, -3, -3]]
}

const step1 = {
    gameState: 
    [[ 0, 0,  0,  0,  0,  1, -3, -3, -3],
    [ 0,  0,  0,  0,  0,  1, -3, -3, -3],
    [ 0,  0,  0,  1,  1,  2, -3, -3, -3],
    [ 0,  0,  0,  1, -3, -3, -3, -3, -3],
    [ 1,  1,  1,  1, -3, -3, -3, -3, -3],
    [-3, -3, -3, -3, -3, -3, -3, -3, -3],
    [-3, -3, -3, -3, -3, -3, -3, -3, -3],
    [-3, -3, -3, -3, -3, -3, -3, -3, -3],
    [-3, -3, -3, -3, -3, -3, -3, -3, -3]],
    move: "click",
    coords: [0, 0],
    description: "Starting with the corners in a guessing mode of Minesweeper is ideal due to your first click being a guaranteed no-bomb click! The corners are an efficient way to clear a grid as regardless of mine density they are areas which are more likely to have logically unsolvable predicaments.\n In higher level grids, the corners are a zone of misfortune, so experienced players may make logical guesses to prioritize their clear progression of the grids to reach those areas."
}

const step2 = {
    gameState: 
    [[ 0, 0,  0,  0,  0,  1, -3, -3, -3],
    [ 0,  0,  0,  0,  0,  1, -3, -3, -3],
    [ 0,  0,  0,  1,  1,  2, -3, -3, -3],
    [ 0,  0,  0,  1, -2, -3, -3, -3, -3],
    [ 1,  1,  1,  1, -3, -3, -3, -3, -3],
    [-3, -3, -3, -3, -3, -3, -3, -3, -3],
    [-3, -3, -3, -3, -3, -3, -3, -3, -3],
    [-3, -3, -3, -3, -3, -3, -3, -3, -3],
    [-3, -3, -3, -3, -3, -3, -3, -3, -3]],
    move: "flag",
    coords: [3, 4],
    description: "Flag the cell for the diagonal 1."
}

const step3 = {
    gameState: 
    [[ 0, 0,  0,  0,  0,  1, -3, -3, -3],
    [ 0,  0,  0,  0,  0,  1, -3, -3, -3],
    [ 0,  0,  0,  1,  1,  2, -3, -3, -3],
    [ 0,  0,  0,  1, -2, -3, -3, -3, -3],
    [ 1,  1,  1,  1,  1,  2,  1, -3, -3],
    [-3, -3,  1,  0,  0,  0,  1, -3, -3],
    [-3, -3,  1,  1,  1,  1,  1, -3, -3],
    [-3, -3, -3, -3, -3, -3, -3, -3, -3],
    [-3, -3, -3, -3, -3, -3, -3, -3, -3]],
    move: "chord",
    coords: [4, 3],
    description: "Chord this 1 since its only bomb has already been found.",
}

const step4 = {
    gameState: 
    [[ 0, 0,  0,  0,  0,  1, -3, -3, -3],
    [ 0,  0,  0,  0,  0,  1, -3, -3, -3],
    [ 0,  0,  0,  1,  1,  2, -3, -3, -3],
    [ 0,  0,  0,  1, -2, -3, -2, -3, -3],
    [ 1,  1,  1,  1,  1,  2,  1, -3, -3],
    [-3, -3,  1,  0,  0,  0,  1, -3, -3],
    [-3, -3,  1,  1,  1,  1,  1, -3, -3],
    [-3, -3, -3, -3, -3, -3, -3, -3, -3],
    [-3, -3, -3, -3, -3, -3, -3, -3, -3]],
    move: "flag",
    coords: [3, 6],
    description: "Place a flag above the 1 since this is a 1-2-1 deduction pattern. In a 1-2-1, the mines can only go above the 1s since if a mine were also above the 2, there would be 2 mines surrounding the 1 cells, which is incorrect."
}

const step5 = {
    gameState: 
    [[ 0, 0,  0,  0,  0,  1, -3, -3, -3],
    [ 0,  0,  0,  0,  0,  1, -3, -3, -3],
    [ 0,  0,  0,  1,  1,  2, -3, -3, -3],
    [ 0,  0,  0,  1, -2,  2, -2,  1, -3],
    [ 1,  1,  1,  1,  1,  2,  1,  1, -3],
    [-3, -3,  1,  0,  0,  0,  1,  1, -3],
    [-3, -3,  1,  1,  1,  1,  1, -3, -3],
    [-3, -3, -3, -3, -3, -3, -3, -3, -3],
    [-3, -3, -3, -3, -3, -3, -3, -3, -3]],
    move: "chord",
    coords: [4, 6],
    description: "Chord this 1 since its only bomb has already been found."
}

const step6 = {
    gameState: 
    [[ 0, 0,  0,  0,  0,  1, -3, -3, -3],
    [ 0,  0,  0,  0,  0,  1,  2, -3, -3],
    [ 0,  0,  0,  1,  1,  2,  2, -3, -3],
    [ 0,  0,  0,  1, -2,  2, -2,  1, -3],
    [ 1,  1,  1,  1,  1,  2,  1,  1, -3],
    [-3, -3,  1,  0,  0,  0,  1,  1, -3],
    [-3, -3,  1,  1,  1,  1,  1, -3, -3],
    [-3, -3, -3, -3, -3, -3, -3, -3, -3],
    [-3, -3, -3, -3, -3, -3, -3, -3, -3]],
    move: "chord",
    coords: [2, 5],
    description: "This 2 can be chorded since we found its mines already."
}

const step7 = {
    gameState: 
    [[ 0, 0,  0,  0,  0,  1, -2, -3, -3],
    [ 0,  0,  0,  0,  0,  1,  2, -3, -3],
    [ 0,  0,  0,  1,  1,  2,  2, -3, -3],
    [ 0,  0,  0,  1, -2,  2, -2,  1, -3],
    [ 1,  1,  1,  1,  1,  2,  1,  1, -3],
    [-3, -3,  1,  0,  0,  0,  1,  1, -3],
    [-3, -3,  1,  1,  1,  1,  1, -3, -3],
    [-3, -3, -3, -3, -3, -3, -3, -3, -3],
    [-3, -3, -3, -3, -3, -3, -3, -3, -3]],
    move: "flag",
    coords: [0, 6],
    description: "Flag this diagonal 1's only available cell."
}

const step8 = {
    gameState: 
    [[ 0, 0,  0,  0,  0,  1, -2, -3, -3],
    [ 0,  0,  0,  0,  0,  1,  2, -3, -3],
    [ 0,  0,  0,  1,  1,  2,  2,  3,  2],
    [ 0,  0,  0,  1, -2,  2, -2,  1,  0],
    [ 1,  1,  1,  1,  1,  2,  1,  1,  0],
    [-3, -3,  1,  0,  0,  0,  1,  1,  1],
    [-3, -3,  1,  1,  1,  1,  1, -3, -3],
    [-3, -3, -3, -3, -3, -3, -3, -3, -3],
    [-3, -3, -3, -3, -3, -3, -3, -3, -3]],
    move: "chord",
    coords: [3, 7],
    description: "Chord this 1 since its only bomb has already been found."
}

const step9 = {
    gameState: 
    [[ 0, 0,  0,  0,  0,  1, -2, -3, -3],
    [ 0,  0,  0,  0,  0,  1,  2, -2, -3],
    [ 0,  0,  0,  1,  1,  2,  2,  3,  2],
    [ 0,  0,  0,  1, -2,  2, -2,  1,  0],
    [ 1,  1,  1,  1,  1,  2,  1,  1,  0],
    [-3, -3,  1,  0,  0,  0,  1,  1,  1],
    [-3, -3,  1,  1,  1,  1,  1, -3, -3],
    [-3, -3, -3, -3, -3, -3, -3, -3, -3],
    [-3, -3, -3, -3, -3, -3, -3, -3, -3]],
    move: "flag",
    coords: [1, 7],
    description: "This 2 has 1 mine remaining and one cell left, so we can flag that cell."
}

const step10 = {
    gameState: 
    [[ 0, 0,  0,  0,  0,  1, -2, -3, -3],
    [ 0,  0,  0,  0,  0,  1,  2, -2, -2],
    [ 0,  0,  0,  1,  1,  2,  2,  3,  2],
    [ 0,  0,  0,  1, -2,  2, -2,  1,  0],
    [ 1,  1,  1,  1,  1,  2,  1,  1,  0],
    [-3, -3,  1,  0,  0,  0,  1,  1,  1],
    [-3, -3,  1,  1,  1,  1,  1, -3, -3],
    [-3, -3, -3, -3, -3, -3, -3, -3, -3],
    [-3, -3, -3, -3, -3, -3, -3, -3, -3]],
    move: "flag",
    coords: [1, 8],
    description: "This 3 has 1 mine remaining and 1 cell left, so we can flag that cell."
}

const step11 = {
    gameState: 
    [[ 0, 0,  0,  0,  0,  1, -2,  3, -3],
    [ 0,  0,  0,  0,  0,  1,  2, -2, -2],
    [ 0,  0,  0,  1,  1,  2,  2,  3,  2],
    [ 0,  0,  0,  1, -2,  2, -2,  1,  0],
    [ 1,  1,  1,  1,  1,  2,  1,  1,  0],
    [-3, -3,  1,  0,  0,  0,  1,  1,  1],
    [-3, -3,  1,  1,  1,  1,  1, -3, -3],
    [-3, -3, -3, -3, -3, -3, -3, -3, -3],
    [-3, -3, -3, -3, -3, -3, -3, -3, -3]],
    move: "flag",
    coords: [1, 6],
    description: "Now you can clear this space because the 2 is satisfied from the flags we have placed."
}
        
const step12 = {
    gameState: 
    [[ 0, 0,  0,  0,  0,  1, -2,  3,  2],
    [ 0,  0,  0,  0,  0,  1,  2, -2, -2],
    [ 0,  0,  0,  1,  1,  2,  2,  3,  2],
    [ 0,  0,  0,  1, -2,  2, -2,  1,  0],
    [ 1,  1,  1,  1,  1,  2,  1,  1,  0],
    [-3, -3,  1,  0,  0,  0,  1,  1,  1],
    [-3, -3,  1,  1,  1,  1,  1, -3, -3],
    [-3, -3, -3, -3, -3, -3, -3, -3, -3],
    [-3, -3, -3, -3, -3, -3, -3, -3, -3]],
    move: "chord",
    coords: [0, 7],
    description: "Chord this 3 since all its mines have been found."
}       
        
const step13 = {
    gameState: 
    [[ 0, 0,  0,  0,  0,  1, -2,  3,  2],
    [ 0,  0,  0,  0,  0,  1,  2, -2, -2],
    [ 0,  0,  0,  1,  1,  2,  2,  3,  2],
    [ 0,  0,  0,  1, -2,  2, -2,  1,  0],
    [ 1,  1,  1,  1,  1,  2,  1,  1,  0],
    [-3, -3,  1,  0,  0,  0,  1,  1,  1],
    [-3, -3,  1,  1,  1,  1,  1, -2, -3],
    [-3, -3, -3, -3, -3, -3, -3, -3, -3],
    [-3, -3, -3, -3, -3, -3, -3, -3, -3]],
    move: "flag",
    coords: [6, 7],
    description: "Flag this space because of this diagonal 1."
}  

const step14 = {
    gameState: 
    [[ 0, 0,  0,  0,  0,  1, -2,  3,  2],
    [ 0,  0,  0,  0,  0,  1,  2, -2, -2],
    [ 0,  0,  0,  1,  1,  2,  2,  3,  2],
    [ 0,  0,  0,  1, -2,  2, -2,  1,  0],
    [ 1,  1,  1,  1,  1,  2,  1,  1,  0],
    [-3, -3,  1,  0,  0,  0,  1,  1,  1],
    [-3, -3,  1,  1,  1,  1,  1, -2, -3],
    [-3, -3, -3, -3, -3,  1,  1,  1, -3],
    [-3, -3, -3, -3, -3, -3, -3, -3, -3]],
    move: "chord",
    coords: [6, 6],
    description: "You can chord this 1 because of the flag we just placed."
}

const step15 = {
    gameState: 
    [[ 0, 0,  0,  0,  0,  1, -2,  3,  2],
    [ 0,  0,  0,  0,  0,  1,  2, -2, -2],
    [ 0,  0,  0,  1,  1,  2,  2,  3,  2],
    [ 0,  0,  0,  1, -2,  2, -2,  1,  0],
    [ 1,  1,  1,  1,  1,  2,  1,  1,  0],
    [-3, -3,  1,  0,  0,  0,  1,  1,  1],
    [-3, -3,  1,  1,  1,  1,  1, -2,  1],
    [-3, -3, -3, -3, -3,  1,  1,  1,  1],
    [-3, -3, -3, -3, -3,  1,  0,  0,  0]],
    move: "chord",
    coords: [7, 7],
    description: "Chord this 1."
}       

const step16 = {
    gameState: 
    [[ 0, 0,  0,  0,  0,  1, -2,  3,  2],
    [ 0,  0,  0,  0,  0,  1,  2, -2, -2],
    [ 0,  0,  0,  1,  1,  2,  2,  3,  2],
    [ 0,  0,  0,  1, -2,  2, -2,  1,  0],
    [ 1,  1,  1,  1,  1,  2,  1,  1,  0],
    [-3, -3,  1,  0,  0,  0,  1,  1,  1],
    [-3, -3,  1,  1,  1,  1,  1, -2,  1],
    [-3, -3, -3, -3, -2,  1,  1,  1,  1],
    [-3, -3, -3, -3, -3,  1,  0,  0,  0]],
    move: "flag",
    coords: [7, 4],
    description: "Flag this because of the diagonal 1."
}

const step17 = {
    gameState: 
    [[ 0, 0,  0,  0,  0,  1, -2,  3,  2],
    [ 0,  0,  0,  0,  0,  1,  2, -2, -2],
    [ 0,  0,  0,  1,  1,  2,  2,  3,  2],
    [ 0,  0,  0,  1, -2,  2, -2,  1,  0],
    [ 1,  1,  1,  1,  1,  2,  1,  1,  0],
    [-3, -3,  1,  0,  0,  0,  1,  1,  1],
    [-3,  3,  1,  1,  1,  1,  1, -2,  1],
    [-3,  2,  0,  1, -2,  1,  1,  1,  1],
    [-3,  1,  0,  1, -3,  1,  0,  0,  0]],
    move: "chord",
    coords: [6, 3],
    description: "Chord again."
}
       
const step18 = {
    gameState: 
    [[ 0, 0,  0,  0,  0,  1, -2,  3,  2],
    [ 0,  0,  0,  0,  0,  1,  2, -2, -2],
    [ 0,  0,  0,  1,  1,  2,  2,  3,  2],
    [ 0,  0,  0,  1, -2,  2, -2,  1,  0],
    [ 1,  1,  1,  1,  1,  2,  1,  1,  0],
    [-3, -2,  1,  0,  0,  0,  1,  1,  1],
    [-3,  3,  1,  1,  1,  1,  1, -2,  1],
    [-3,  2,  0,  1, -2,  1,  1,  1,  1],
    [-3,  1,  0,  1, -3,  1,  0,  0,  0]],
    move: "flag",
    coords: [5, 1],
    description: "Flag a mine here due to the diagonal 1."
}
        
const step19 = {
    gameState: 
    [[ 0, 0,  0,  0,  0,  1, -2,  3,  2],
    [ 0,  0,  0,  0,  0,  1,  2, -2, -2],
    [ 0,  0,  0,  1,  1,  2,  2,  3,  2],
    [ 0,  0,  0,  1, -2,  2, -2,  1,  0],
    [ 1,  1,  1,  1,  1,  2,  1,  1,  0],
    [ 2, -2,  1,  0,  0,  0,  1,  1,  1],
    [-3,  3,  1,  1,  1,  1,  1, -2,  1],
    [-3,  2,  0,  1, -2,  1,  1,  1,  1],
    [-3,  1,  0,  1, -3,  1,  0,  0,  0]],
    move: "chord",
    coords: [4, 0],
    description: "Chord the 1 since you just found its only bomb."
}

const step20 = {
    gameState: 
    [[ 0, 0,  0,  0,  0,  1, -2,  3,  2],
    [ 0,  0,  0,  0,  0,  1,  2, -2, -2],
    [ 0,  0,  0,  1,  1,  2,  2,  3,  2],
    [ 0,  0,  0,  1, -2,  2, -2,  1,  0],
    [ 1,  1,  1,  1,  1,  2,  1,  1,  0],
    [ 2, -2,  1,  0,  0,  0,  1,  1,  1],
    [-2,  3,  1,  1,  1,  1,  1, -2,  1],
    [-3,  2,  0,  1, -2,  1,  1,  1,  1],
    [-3,  1,  0,  1, -3,  1,  0,  0,  0]],
    move: "flag",
    coords: [6, 0],
    description: "Flag the only cell left for this 2."
}
        
const step21 = {
    gameState: 
    [[ 0, 0,  0,  0,  0,  1, -2,  3,  2],
    [ 0,  0,  0,  0,  0,  1,  2, -2, -2],
    [ 0,  0,  0,  1,  1,  2,  2,  3,  2],
    [ 0,  0,  0,  1, -2,  2, -2,  1,  0],
    [ 1,  1,  1,  1,  1,  2,  1,  1,  0],
    [ 2, -2,  1,  0,  0,  0,  1,  1,  1],
    [-2,  3,  1,  1,  1,  1,  1, -2,  1],
    [-2,  2,  0,  1, -2,  1,  1,  1,  1],
    [-3,  1,  0,  1, -3,  1,  0,  0,  0]],
    move: "flag",
    coords: [7, 0],
    description: "Flag the only cell left for this 3, since it only has one mine left."
}

const step22 = {
    gameState: 
    [[ 0, 0,  0,  0,  0,  1, -2,  3,  2],
    [ 0,  0,  0,  0,  0,  1,  2, -2, -2],
    [ 0,  0,  0,  1,  1,  2,  2,  3,  2],
    [ 0,  0,  0,  1, -2,  2, -2,  1,  0],
    [ 1,  1,  1,  1,  1,  2,  1,  1,  0],
    [ 2, -2,  1,  0,  0,  0,  1,  1,  1],
    [-2,  3,  1,  1,  1,  1,  1, -2,  1],
    [-2,  2,  0,  1, -2,  1,  1,  1,  1],
    [ 1,  1,  0,  1, -3,  1,  0,  0,  0]],
    move: "click",
    coords: [7, 0],
    description: "The last remaining cell for the 2 can be cleard since all its mines are found."
}

const step23 = {
    gameState: 
    [[ 0, 0,  0,  0,  0,  1, -2,  3,  2],
    [ 0,  0,  0,  0,  0,  1,  2, -2, -2],
    [ 0,  0,  0,  1,  1,  2,  2,  3,  2],
    [ 0,  0,  0,  1, -2,  2, -2,  1,  0],
    [ 1,  1,  1,  1,  1,  2,  1,  1,  0],
    [ 2, -2,  1,  0,  0,  0,  1,  1,  1],
    [-2,  3,  1,  1,  1,  1,  1, -2,  1],
    [-2,  2,  0,  1, -2,  1,  1,  1,  1],
    [ 1,  1,  0,  1,  1,  1,  0,  0,  0]],
    move: "click",
    coords: [7, 4],
    description: "Clear this cell since the mine has already been found for the surrounding 1s."
}

const tutorial = {
    steps: [
        step1,
        step2,
        step3,
        step4,
        step5,
        step6,
        step7,
        step8,
        step9,
        step10,
        step11,
        step12,
        step13,
        step14,
        step15,
        step16,
        step17,
        step18,
        step19,
        step20,
        step21,
        step22,
        step23
    ]
}

module.exports = tutorial2