import React from "react";
import baseCell from "../assets/baseCell.svg";
import flag from "../assets/flag.svg"
import axios from "axios";
import gameState from "../assets/gameState";

const testGrid = [
	[-3, -3, 1, 0, 0, 0, 0, 0, 0],
	[-3, -3, 3, 1, 1, 0, 0, 0, 0],
	[-3, -3, 3, -1, 1, 0, 1, 1, 1],
	[-2, 2, 2, 1, 2, 1, 2, -2, 1],
	[2, 2, 0, 0, 1, -2, 2, 1, 1],
	[-2, 1, 0, 1, 2, 2, 1, 0, 0],
	[1, 1, 0, 1, -1, 1, 1, 1, 1],
	[0, 0, 0, 1, 2, 2, 2, -1, 1],
	[0, 0, 0, 0, 1, -2, 2, 1, 1],
];

export default function Cell({ pos }) {
	const [rowIdx, colIdx] = pos;
	const value = testGrid[rowIdx][colIdx];
	let cell;
	switch (value) {
		case gameState.BLANK:
			cell = <img className="" src={baseCell} />;
			break;
		case gameState.FLAG:
			cell = (
                <div className="h-full w-full relative flex items-center justify-center" >
                    <img className="absolute" src={baseCell} />;
                    <img className="absolute h-8 w-full z-10" src={flag} />;
                </div>
            )
			break;
		case gameState.MINE:
			cell = <img className="" src={baseCell} />;
			break;
		default:
			cell = (
				<div className="h-14 flex w-14 bg-transparent items-center justify-center text-red-700 border-[1px] border-zinc-400">
					<h1
						className="font-mono font-extrabold text-4xl"
						style={{ color: gameState.COLORS[value] }}
					>
						{value}
					</h1>
				</div>
			);
	}

	const handleClick = async (event) => {
		console.log(pos);
		await axios.post("http://localhost:3000/", {
			message: "I was clicked",
		});
	};

	return (
		<div className="relative h-14 w-14" onClick={handleClick}>
			{cell}
		</div>
	);
}
