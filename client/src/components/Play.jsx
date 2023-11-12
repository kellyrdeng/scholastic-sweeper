import React, { useEffect, useState } from "react";
import Header from "./Header";
import Cell from "./Cell";
import MineGrid from "./MineGrid";
import axios from "axios";

export default function Play() {
	useEffect(() => {
		async function fetchTutorial() {
			const game = await axios.get("http://localhost:3000/play");
			// console.log(tutorial.data)
			localStorage.setItem("game", JSON.stringify(game.data.grid));
		}
		fetchTutorial();
	}, []);

	const [playState, setPlayState] = useState({
		gameGrid: JSON.parse(localStorage.getItem("game") ?? "{}").userGrid ?? [],
		answer: JSON.parse(localStorage.getItem("game") ?? "{}").answerGrid ?? [],
	});

	return (
		<div className="h-screen w-full text-base flex justify-around items-center gap-4">
			<div className="flex flex-col gap-4">
				<MineGrid grid={playState.gameGrid} playState={playState} setPlayState={setPlayState} />
			</div>
		</div>
	);
}
