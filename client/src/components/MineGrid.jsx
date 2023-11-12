import React from "react";
import Cell from "./Cell";
export default function MineGrid() {


const testGrid = [
    [-3, -3, 1, 0, 0, 0, 0, 0, 0],
    [-3, -3, 3, 1, 1, 0, 0, 0, 0],
    [-3, -3, 3, -1, 1, 0, 1, 1, 1],
    [-2, 2, 2, 1, 2, 1, 2, -2, 1],
    [ 2, 2, 0, 0, 1, -2, 2, 1, 1],
    [-2, 1, 0, 1, 2, 2, 1, 0, 0],
    [ 1, 1, 0, 1, -1, 1, 1, 1, 1],
    [ 0, 0, 0, 1, 2, 2, 2, -1, 1],
    [ 0, 0, 0, 0, 1, -2, 2, 1, 1]
]

 return (
  <div className="mine-sweeper-grid bg-[#D7D7D7] w-max h-max border-8 border-[#808080]">
   {testGrid.map((row, rowIdx) => (
    <div className="flex w-max ">
     {row.map((cell, colIdx)=> <Cell pos={[rowIdx, colIdx]}/>)}
    </div>
   ))}
  </div>
 )
}
