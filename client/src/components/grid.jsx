import React from "react";
import Cell from "./Cell";
export default function Grid() {


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
  <div className="mine-sweeper-grid">
   {testGrid.map(row => (
    <div className="flex w-max">
     {row.map(cell=> <Cell/>)}
    </div>
   ))}
  </div>
 )
}
