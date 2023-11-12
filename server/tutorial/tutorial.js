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
    gameState: [[-3, -3,  1,  0,  0,  0,  0,  0,  0],
                [-3, -3,  3,  1,  1,  0,  0,  0,  0],
                [-3, -3, -3, -3,  1,  0,  1,  1,  1],
                [-3, -3, -3, -3,  2,  1,  2, -3, -3],
                [-3, -3, -3, -3, -3, -3, -3, -3, -3],
                [-3, -3, -3, -3, -3, -3, -3, -3, -3],
                [-3, -3, -3, -3, -3, -3, -3, -3, -3],
                [-3, -3, -3, -3, -3, -3, -3, -3, -3],
                [-3, -3, -3, -3, -3, -3, -3, -3, -3]],
    move: "click",
    coords: [0, 8],
    description: "Starting with the corners in a guessing mode of Minesweeper is ideal due to your first click being a guaranteed no-bomb click! The corners are an efficient way to clear a grid as regardless of mine density they are areas which are more likely to have logically unsolvable predicaments.\n In higher level grids, the corners are a zone of misfortune, so experienced players may make logical guesses to prioritize their clear progression of the grids to reach those areas."
}

const step2 = {
    gameState: [[-3, -3,  1,  0,  0,  0,  0,  0,  0],
                [-3, -3,  3,  1,  1,  0,  0,  0,  0],
                [-3, -3, -3, -2,  1,  0,  1,  1,  1],
                [-3, -3, -3, -3,  2,  1,  2, -3, -3],
                [-3, -3, -3, -3, -3, -3, -3, -3, -3],
                [-3, -3, -3, -3, -3, -3, -3, -3, -3],
                [-3, -3, -3, -3, -3, -3, -3, -3, -3],
                [-3, -3, -3, -3, -3, -3, -3, -3, -3],
                [-3, -3, -3, -3, -3, -3, -3, -3, -3]],
    move: "flag",
    coords: [2, 3],
    description: "Diagonal 1s are a great starting place as the other adjacent squares are cleared, leaving only one option for where the mine could be. We can flag this diagonal square."
}

const step3 = {
    gameState: [[-3, -3,  1,  0,  0,  0,  0,  0,  0],
                [-3, -3,  3,  1,  1,  0,  0,  0,  0],
                [-3, -3, -3, -2,  1,  0,  1,  1,  1],
                [-3, -3, -3,  1,  2,  1,  2, -3, -3],
                [-3, -3, -3, -3, -3, -3, -3, -3, -3],
                [-3, -3, -3, -3, -3, -3, -3, -3, -3],
                [-3, -3, -3, -3, -3, -3, -3, -3, -3],
                [-3, -3, -3, -3, -3, -3, -3, -3, -3],
                [-3, -3, -3, -3, -3, -3, -3, -3, -3]],
    move: "chord",
    coords: [2, 4],
    description: "Based on determining the location of the previous 1’s mine, we can make a REDUCTION by comparing the second 1 with the former. The unshared cell between the 1s are clear, you can either click the cell or chord by clicking the second 1.",
    bullets: ["Reduction (click to expand): Reductions are the reduction of cells that have 0% chance of holding a mine.", "Chording (click to expand): Chording means to clear the grid by clicking already satisfied numbers"]
}

const step4 = {
    gameState: [[-3, -3,  1,  0,  0,  0,  0,  0,  0],
                [-3, -3,  3,  1,  1,  0,  0,  0,  0],
                [-3, -3,  3, -2,  1,  0,  1,  1,  1],
                [-3,  2,  2,  1,  2,  1,  2, -3, -3],
                [-3,  2,  0,  0,  1, -3, -3, -3, -3],
                [-3,  1,  0,  1,  2, -3, -3, -3, -3],
                [ 1,  1,  0,  1, -3, -3, -3, -3, -3],
                [ 0,  0,  0,  1,  2, -3, -3, -3, -3],
                [ 0,  0,  0,  0,  1, -3, -3, -3, -3]],
    move: "chord",
    coords: [3, 3],
    description: "Huzzah! You struck some luck. The revealed cell is another 1 which is satisfied with the flag you placed earlier. Click this 1 to clear (chord) the five spaces that now have no chance of containing the mine. This is a great chance to chord rather than click these spaces individually!"
}

const step5 = {
    gameState: [[-3, -3,  1,  0,  0,  0,  0,  0,  0],
                [-3, -3,  3,  1,  1,  0,  0,  0,  0],
                [-3, -3,  3, -2,  1,  0,  1,  1,  1],
                [-3,  2,  2,  1,  2,  1,  2, -3, -3],
                [-3,  2,  0,  0,  1, -2, -3, -3, -3],
                [-3,  1,  0,  1,  2, -3, -3, -3, -3],
                [ 1,  1,  0,  1, -3, -3, -3, -3, -3],
                [ 0,  0,  0,  1,  2, -3, -3, -3, -3],
                [ 0,  0,  0,  0,  1, -3, -3, -3, -3]], 
    move: "flag",
    coords: [4, 5],
    description: "And look at that clear! Look for those diagonals again! Like this 2. As you gain more of the minesweeping eye you can choose to flag or play no flag at times based on what move will give you more information in the future. But for now I recommend you flag this cell for your next move.",
    bullets: ["No flag (click to expand): No flag gameplay means to clear a grid without the usage of flagging which renders you unable to chord. However, you can click into areas which you deduce to big payoff."]
}

const step6 = {
    gameState: [[-3, -3,  1,  0,  0,  0,  0,  0,  0],
                [-3, -3,  3,  1,  1,  0,  0,  0,  0],
                [-3, -3,  3, -2,  1,  0,  1,  1,  1],
                [-3,  2,  2,  1,  2,  1,  2, -3, -3],
                [-3,  2,  0,  0,  1, -2,  2, -3, -3],
                [-3,  1,  0,  1,  2, -3, -3, -3, -3],
                [ 1,  1,  0,  1, -3, -3, -3, -3, -3],
                [ 0,  0,  0,  1,  2, -3, -3, -3, -3],
                [ 0,  0,  0,  0,  1, -3, -3, -3, -3]],
    move: "chord",
    coords: [3, 5],
    description: "This 1 can be chorded since we found its mine already."
}

const step7 = {
    gameState: [[-3, -3,  1,  0,  0,  0,  0,  0,  0],
                [-3, -3,  3,  1,  1,  0,  0,  0,  0],
                [-3, -3,  3, -2,  1,  0,  1,  1,  1],
                [-3,  2,  2,  1,  2,  1,  2, -2, -3],
                [-3,  2,  0,  0,  1, -2,  2, -3, -3],
                [-3,  1,  0,  1,  2, -3, -3, -3, -3],
                [ 1,  1,  0,  1, -3, -3, -3, -3, -3],
                [ 0,  0,  0,  1,  2, -3, -3, -3, -3],
                [ 0,  0,  0,  0,  1, -3, -3, -3, -3]],
    move: "flag",
    coords: [3, 7],
    description: "Another diagonal 1, so you can place the flag here. Now this 2 has both its flags…"
}

const step8 = {
    gameState: [[-3, -3,  1,  0,  0,  0,  0,  0,  0],
                [-3, -3,  3,  1,  1,  0,  0,  0,  0],
                [-3, -3,  3, -2,  1,  0,  1,  1,  1],
                [-3,  2,  2,  1,  2,  1,  2, -2, -3],
                [-3,  2,  0,  0,  1, -2,  2,  1,  1],
                [-3,  1,  0,  1,  2,  2,  1,  0,  0],
                [ 1,  1,  0,  1, -3, -3,  1,  1,  1],
                [ 0,  0,  0,  1,  2, -3, -3, -3, -3],
                [ 0,  0,  0,  0,  1, -3, -3, -3, -3]],
    move: "chord",
    coords: [4, 6],
    description:  "You can chord with this 2 since it has both its flags, which clears a good chuck of spaces."
}

const step9 = {
    gameState: [[-3, -3,  1,  0,  0,  0,  0,  0,  0],
                [-3, -3,  3,  1,  1,  0,  0,  0,  0],
                [-3, -3,  3, -2,  1,  0,  1,  1,  1],
                [-3,  2,  2,  1,  2,  1,  2, -2,  1],
                [-3,  2,  0,  0,  1, -2,  2,  1,  1],
                [-3,  1,  0,  1,  2,  2,  1,  0,  0],
                [ 1,  1,  0,  1, -3, -3,  1,  1,  1],
                [ 0,  0,  0,  1,  2, -3, -3, -3, -3],
                [ 0,  0,  0,  0,  1, -3, -3, -3, -3]],
    move: "chord",
    coords: [4, 7],
    description: "You can just clear this space because this 1 is already satisfied by this mine you flagged earlier."
}

const step10 = {
    gameState: [[-3, -3,  1,  0,  0,  0,  0,  0,  0],
                [-3, -3,  3,  1,  1,  0,  0,  0,  0],
                [-3, -3,  3, -2,  1,  0,  1,  1,  1],
                [-3,  2,  2,  1,  2,  1,  2, -2,  1],
                [-3,  2,  0,  0,  1, -2,  2,  1,  1],
                [-3,  1,  0,  1,  2,  2,  1,  0,  0],
                [ 1,  1,  0,  1, -2, -3,  1,  1,  1],
                [ 0,  0,  0,  1,  2, -3, -3, -3, -3],
                [ 0,  0,  0,  0,  1, -3, -3, -3, -3]],
    move: "flag",
    coords: [6, 4],
    description: "Here is another diagonal 1 that you can flag."
}

const step11 = {
    gameState: [[-3, -3,  1,  0,  0,  0,  0,  0,  0],
                [-3, -3,  3,  1,  1,  0,  0,  0,  0],
                [-3, -3,  3, -2,  1,  0,  1,  1,  1],
                [-3,  2,  2,  1,  2,  1,  2, -2,  1],
                [-3,  2,  0,  0,  1, -2,  2,  1,  1],
                [-3,  1,  0,  1,  2,  2,  1,  0,  0],
                [ 1,  1,  0,  1, -2,  1,  1,  1,  1],
                [ 0,  0,  0,  1,  2, -3, -3, -3, -3],
                [ 0,  0,  0,  0,  1, -3, -3, -3, -3]],
    move: "click",
    coords: [6, 5],
    description: "Now you can clear this space because the 2 is satisfied from the flags we have placed."
}
        
const step12 = {
    gameState: [[-3, -3,  1,  0,  0,  0,  0,  0,  0],
                [-3, -3,  3,  1,  1,  0,  0,  0,  0],
                [-3, -3,  3, -2,  1,  0,  1,  1,  1],
                [-3,  2,  2,  1,  2,  1,  2, -2,  1],
                [-3,  2,  0,  0,  1, -2,  2,  1,  1],
                [-3,  1,  0,  1,  2,  2,  1,  0,  0],
                [ 1,  1,  0,  1, -2,  1,  1,  1,  1],
                [ 0,  0,  0,  1,  2,  2,  2, -3, -3],
                [ 0,  0,  0,  0,  1, -3, -3, -3, -3]],
    move: "chord",
    coords: [6, 5],
    description: "Chord this 1."
}       
        
const step13 = {
    gameState: [[-3, -3,  1,  0,  0,  0,  0,  0,  0],
                [-3, -3,  3,  1,  1,  0,  0,  0,  0],
                [-3, -3,  3, -2,  1,  0,  1,  1,  1],
                [-3,  2,  2,  1,  2,  1,  2, -2,  1],
                [-3,  2,  0,  0,  1, -2,  2,  1,  1],
                [-3,  1,  0,  1,  2,  2,  1,  0,  0],
                [ 1,  1,  0,  1, -2,  1,  1,  1,  1],
                [ 0,  0,  0,  1,  2,  2,  2, -3, -3],
                [ 0,  0,  0,  0,  1, -2, -3, -3, -3]],
    move: "flag",
    coords: [8, 5],
    description: "Flag this space because of this diagonal 2."
}  

const step14 = {
    gameState: [[-3, -3,  1,  0,  0,  0,  0,  0,  0],
                [-3, -3,  3,  1,  1,  0,  0,  0,  0],
                [-3, -3,  3, -2,  1,  0,  1,  1,  1],
                [-3,  2,  2,  1,  2,  1,  2, -2,  1],
                [-3,  2,  0,  0,  1, -2,  2,  1,  1],
                [-3,  1,  0,  1,  2,  2,  1,  0,  0],
                [ 1,  1,  0,  1, -2,  1,  1,  1,  1],
                [ 0,  0,  0,  1,  2,  2,  2, -3, -3],
                [ 0,  0,  0,  0,  1, -2,  2, -3, -3]],
    move: "chord",
    coords: [7, 5],
    description: "You can chord this 2 because of the flag we just placed."
}

const step15 = {
    gameState: [[-3, -3,  1,  0,  0,  0,  0,  0,  0],
                [-3, -3,  3,  1,  1,  0,  0,  0,  0],
                [-3, -3,  3, -2,  1,  0,  1,  1,  1],
                [-3,  2,  2,  1,  2,  1,  2, -2,  1],
                [-3,  2,  0,  0,  1, -2,  2,  1,  1],
                [-3,  1,  0,  1,  2,  2,  1,  0,  0],
                [ 1,  1,  0,  1, -2,  1,  1,  1,  1],
                [ 0,  0,  0,  1,  2,  2,  2, -2, -3],
                [ 0,  0,  0,  0,  1, -2,  2, -3, -3]],
    move: "flag",
    coords: [7, 7],
    description: "Flag for the diagonal 1."
}       

const step16 = {
    gameState: [[-3, -3,  1,  0,  0,  0,  0,  0,  0],
                [-3, -3,  3,  1,  1,  0,  0,  0,  0],
                [-3, -3,  3, -2,  1,  0,  1,  1,  1],
                [-3,  2,  2,  1,  2,  1,  2, -2,  1],
                [-3,  2,  0,  0,  1, -2,  2,  1,  1],
                [-3,  1,  0,  1,  2,  2,  1,  0,  0],
                [ 1,  1,  0,  1, -2,  1,  1,  1,  1],
                [ 0,  0,  0,  1,  2,  2,  2, -2,  1],
                [ 0,  0,  0,  0,  1, -2,  2, -3, -3]],
    move: "chord",
    coords: [6, 8],
    description: "Chord the 1 around the flag."
}

const step17 = {
    gameState: [[-3, -3,  1,  0,  0,  0,  0,  0,  0],
                [-3, -3,  3,  1,  1,  0,  0,  0,  0],
                [-3, -3,  3, -2,  1,  0,  1,  1,  1],
                [-3,  2,  2,  1,  2,  1,  2, -2,  1],
                [-3,  2,  0,  0,  1, -2,  2,  1,  1],
                [-3,  1,  0,  1,  2,  2,  1,  0,  0],
                [ 1,  1,  0,  1, -2,  1,  1,  1,  1],
                [ 0,  0,  0,  1,  2,  2,  2, -2,  1],
                [ 0,  0,  0,  0,  1, -2,  2,  1,  1]],
    move: "chord",
    coords: [7, 8],
    description: "Chord again."
}
       
const step18 = {
    gameState: [[-3, -3,  1,  0,  0,  0,  0,  0,  0],
                [-3, -3,  3,  1,  1,  0,  0,  0,  0],
                [-3, -3,  3, -2,  1,  0,  1,  1,  1],
                [-3,  2,  2,  1,  2,  1,  2, -2,  1],
                [-3,  2,  0,  0,  1, -2,  2,  1,  1],
                [-2,  1,  0,  1,  2,  2,  1,  0,  0],
                [ 1,  1,  0,  1, -2,  1,  1,  1,  1],
                [ 0,  0,  0,  1,  2,  2,  2, -2,  1],
                [ 0,  0,  0,  0,  1, -2,  2,  1,  1]],
    move: "flag",
    coords: [5, 0],
    description: "Flag a mine here due to the diagonal 1."
}
        
const step19 = {
    gameState: [[-3, -3,  1,  0,  0,  0,  0,  0,  0],
                [-3, -3,  3,  1,  1,  0,  0,  0,  0],
                [-3, -3,  3, -2,  1,  0,  1,  1,  1],
                [-3,  2,  2,  1,  2,  1,  2, -2,  1],
                [ 2,  2,  0,  0,  1, -2,  2,  1,  1],
                [-2,  1,  0,  1,  2,  2,  1,  0,  0],
                [ 1,  1,  0,  1, -2,  1,  1,  1,  1],
                [ 0,  0,  0,  1,  2,  2,  2, -2,  1],
                [ 0,  0,  0,  0,  1, -2,  2,  1,  1]],
    move: "chord",
    coords: [5, 1],
    description: "Chord the 1 since you just found its only bomb."
}

const step20 = {
    gameState: [[-3, -3,  1,  0,  0,  0,  0,  0,  0],
                [-3, -3,  3,  1,  1,  0,  0,  0,  0],
                [-3, -3,  3, -2,  1,  0,  1,  1,  1],
                [-2,  2,  2,  1,  2,  1,  2, -2,  1],
                [ 2,  2,  0,  0,  1, -2,  2,  1,  1],
                [-2,  1,  0,  1,  2,  2,  1,  0,  0],
                [ 1,  1,  0,  1, -2,  1,  1,  1,  1],
                [ 0,  0,  0,  1,  2,  2,  2, -2,  1],
                [ 0,  0,  0,  0,  1, -2,  2,  1,  1]],
    move: "flag",
    coords: [3, 0],
    description: "Flag the only cell left for this 2."
}
        
const step21 = {
    gameState: [[-3, -3,  1,  0,  0,  0,  0,  0,  0],
                [-3, -3,  3,  1,  1,  0,  0,  0,  0],
                [-3, -2,  3, -2,  1,  0,  1,  1,  1],
                [-2,  2,  2,  1,  2,  1,  2, -2,  1],
                [ 2,  2,  0,  0,  1, -2,  2,  1,  1],
                [-2,  1,  0,  1,  2,  2,  1,  0,  0],
                [ 1,  1,  0,  1, -2,  1,  1,  1,  1],
                [ 0,  0,  0,  1,  2,  2,  2, -2,  1],
                [ 0,  0,  0,  0,  1, -2,  2,  1,  1]],
    move: "flag",
    coords: [2, 1],
    description: "This diagonal 2 only has one cell left and one bomb left, therefore we can flag the mine in this last cell."
}

const step22 = {
    gameState: [[-3, -3,  1,  0,  0,  0,  0,  0,  0],
                [-3, -2,  3,  1,  1,  0,  0,  0,  0],
                [-3, -2,  3, -2,  1,  0,  1,  1,  1],
                [-2,  2,  2,  1,  2,  1,  2, -2,  1],
                [ 2,  2,  0,  0,  1, -2,  2,  1,  1],
                [-2,  1,  0,  1,  2,  2,  1,  0,  0],
                [ 1,  1,  0,  1, -2,  1,  1,  1,  1],
                [ 0,  0,  0,  1,  2,  2,  2, -2,  1],
                [ 0,  0,  0,  0,  1, -2,  2,  1,  1]],
    move: "flag",
    coords: [1, 1],
    description: "This diagonal 3 only has one cell left and one bomb left, therefore we can flag the mine in this last cell."
}

const step23 = {
    gameState: [[-3,  1,  1,  0,  0,  0,  0,  0,  0],
                [-3, -2,  3,  1,  1,  0,  0,  0,  0],
                [-3, -2,  3, -2,  1,  0,  1,  1,  1],
                [-2,  2,  2,  1,  2,  1,  2, -2,  1],
                [ 2,  2,  0,  0,  1, -2,  2,  1,  1],
                [-2,  1,  0,  1,  2,  2,  1,  0,  0],
                [ 1,  1,  0,  1, -2,  1,  1,  1,  1],
                [ 0,  0,  0,  1,  2,  2,  2, -2,  1],
                [ 0,  0,  0,  0,  1, -2,  2,  1,  1]],
    move: "chord",
    coords: [1, 2],
    description: "Chord this 1 since we found its only bomb."
}

const step24 = {
    gameState: [[ 1,  1,  1,  0,  0,  0,  0,  0,  0],
                [ 2, -2,  3,  1,  1,  0,  0,  0,  0],
                [-3, -2,  3, -2,  1,  0,  1,  1,  1],
                [-2,  2,  2,  1,  2,  1,  2, -2,  1],
                [ 2,  2,  0,  0,  1, -2,  2,  1,  1],
                [-2,  1,  0,  1,  2,  2,  1,  0,  0],
                [ 1,  1,  0,  1, -2,  1,  1,  1,  1],
                [ 0,  0,  0,  1,  2,  2,  2, -2,  1],
                [ 0,  0,  0,  0,  1, -2,  2,  1,  1]],
    move: "chord",
    coords: [0, 1],
    description: "Chord this 1 since we found its only bomb."
}

const step25 = {
    gameState: [[ 1,  1,  1,  0,  0,  0,  0,  0,  0],
                [ 2, -2,  3,  1,  1,  0,  0,  0,  0],
                [ 3, -2,  3, -2,  1,  0,  1,  1,  1],
                [-2,  2,  2,  1,  2,  1,  2, -2,  1],
                [ 2,  2,  0,  0,  1, -2,  2,  1,  1],
                [-2,  1,  0,  1,  2,  2,  1,  0,  0],
                [ 1,  1,  0,  1, -2,  1,  1,  1,  1],
                [ 0,  0,  0,  1,  2,  2,  2, -2,  1],
                [ 0,  0,  0,  0,  1, -2,  2,  1,  1]],
    move: "chord",
    coords: [1, 0],
    description: "Chord this 2 since we already found and flagged its bombs."
}

const answer = {
    answer: [[ 1,  1,  1,  0,  0,  0,  0,  0,  0],
             [ 2, -1,  3,  1,  1,  0,  0,  0,  0],
             [ 3, -1,  3, -1,  1,  0,  1,  1,  1],
             [-1,  2,  2,  1,  2,  1,  2, -1,  1],
             [ 2,  2,  0,  0,  1, -1,  2,  1,  1],
             [-1,  1,  0,  1,  2,  2,  1,  0,  0],
             [ 1,  1,  0,  1, -1,  1,  1,  1,  1],
             [ 0,  0,  0,  1,  2,  2,  2, -1,  1],
             [ 0,  0,  0,  0,  1, -1,  2,  1,  1]]
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
        step23,
        step24,
        step25
    ]
}

module.exports = tutorial