import React, { useEffect, useState } from "react";
import Header from "./Header";
import Cell from "./Cell";
import MineGrid from "./MineGrid";
import axios from "axios";

export default function Play() {
	useEffect(() => {
		async function fetchTutorial() {
			const game = await axios.get("http://localhost:3000/play");
			console.log(game.data)
			localStorage.setItem("game", JSON.stringify(game.data.grid));
			setPlayState(playState => ({...playState, game: game.data.grid,
			gameGrid: game.data.userGrid, answer: game.data.answerGrid}))
		}
		fetchTutorial();
	}, []);

	const [playState, setPlayState] = useState({
	});

	return (
		<div className="h-screen w-full text-base flex justify-around items-center gap-4">
			<div className="flex flex-col gap-4">
				<MineGrid grid={playState.gameGrid} playState={playState} setPlayState={setPlayState} />
			</div>
		</div>
	);
}
