import React from "react";

export default function About() {
	return (
		<div>
			<main id="About_Main"className="m-auto m-0" >
				<h1 className="pt-8 content-center font-serif"><b>Welcome to ScholasticSweeper!</b></h1>
				<p className ="font-mono leading-relaxed">
				We are ScholasticSweeper, a student-created website that provides 
				tutorials on how to play Minesweeper and a playable grid that you 
				can sweep to your heart's content The tutorial portion of ScholasticSweeper
				is a randomly generated Beginner grid (9x9 with ten mines) that is cleared
				with step by step explanations of the logic behind each move. 
				These explanations cover <span class="em">patterns, chording,</span> and <span id="about_span">efficiency</span> as warranted.
				As for the playable grid it is as it sounds! A generated 9x9 Beginner
				grid with ten mines, with which you have the ability to <span class="em">flag, chord,</span> and <span class="em">sweep!</span> 
				</p>
			</main>

		</div>
	);
}
