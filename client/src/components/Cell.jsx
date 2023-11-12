import React from "react";
import baseCell from "../assets/baseCell.svg";
import flag from "../assets/flag.svg";
import axios from "axios";
import gameState from "../assets/gameState";

export default function Cell({ grid, pos, tutorialCell }) {
    // tutorialCell ? console.log(tutorialCell, pos) : null
	const activeStyle =
		tutorialCell && tutorialCell[0] === pos[0] && tutorialCell[1] === pos[1]
			? " border-yellow-500 border-4 "
			: " border-zinc-400 border-[1px] ";
	const [rowIdx, colIdx] = pos;
	const value = grid[rowIdx][colIdx];
	let cell;
	switch (value) {
		case gameState.BLANK:
			cell = <img className={"" + activeStyle} src={baseCell} />;
			break;
		case gameState.FLAG:
			cell = (
				<div className={"h-full w-full relative flex items-center justify-center" + activeStyle}>
					<img className="absolute" src={baseCell} />;
					<img className="absolute h-8 w-full z-10" src={flag} />;
				</div>
			);
			break;
		case gameState.MINE:
			cell = <img className={"" + activeStyle} src={baseCell} />;
			break;
		default:
			cell = (
				<div className={"h-14 flex w-14 bg-transparent items-center justify-center text-red-700" + activeStyle}>
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
		if (event.button === 0) {
			//left button
			await axios.post("http://localhost:3000/", {
				gameState: [],
				answerGrid: [],
				coords: [],
				action: "leftclick",
			});
		}
		if (event.button === 2) {
			//right button
			await axios.post("http://localhost:3000/", {
				gameState: [],
				answerGrid: [],
				coords: [],
				action: "rightclick",
			});
		}
	};

	return (
		<div className={"relative h-14 w-14"} onClick={handleClick}>
			{cell}
		</div>
	);
}
