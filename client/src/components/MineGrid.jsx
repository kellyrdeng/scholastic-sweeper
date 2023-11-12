import React from "react";
import Cell from "./Cell";

export default function MineGrid({
	grid,
	tutorialCell,
	playState = null,
	setPlayState = null,
}) {
	return (
		<div className="mine-sweeper-grid bg-[#D7D7D7] w-max h-max border-8 border-[#808080]">
			{grid?.map((row, rowIdx) => (
				<div className="flex w-max ">
					{row.map((cell, colIdx) => (
						<Cell
							grid={grid}
							pos={[rowIdx, colIdx]}
							tutorialCell={tutorialCell}
							playState={playState}
							setPlayState={setPlayState}
						/>
					))}
				</div>
			))}
		</div>
	);
}
