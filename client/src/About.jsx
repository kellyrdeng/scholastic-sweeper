import React from "react";
import Header from "./components/Header";

export default function About() {
	return (
		<div className="h-screen w-full text-base">
			<main>
				<h1 className="content-center" >Welcome to ScholasticSweeper!</h1>
				<p>
				We are ScholasticSweeper, a student-created website that provides 
				tutorials on how to play Minesweeper and a playable grid that you 
				can sweep to your heart's content! The tutorial portion of ScholasticSweeper
				is a randomly generated Beginner grid (9x9 with ten mines) that is cleared
				with step by step explanations of the logic behind each move. 
				These explanations cover patterns, chording, and efficiency as warranted.
				This tutorial grid cannot be played but you can navigate between steps as you please.
				As for the playable grid it is as it sounds! A randomly generated 9x9 Beginner
				grid with ten mines, with which you have the ability to flag, chord, and sweep! 
				</p>
			</main>
			
			
		</div>
	);
}
