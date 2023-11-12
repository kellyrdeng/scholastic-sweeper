import React from "react";
import old_sweep from '../assets/imgs/oldminesweep.png';
import new_sweep from '../assets/imgs/newminesweeper.png';

export default function About() {
	return (
		<div>
			<main id="About_Main"className="m-auto m-0" >
				<h1 className="py-5 content-center font-serif"><b>About ScholasticSweeper:</b></h1>
				<p className ="font-mono leading-relaxed">
				<span class="em">Why the interest in Minesweeper?</span> A game originally created by Microsoft in the 90s, 
				Minesweeper has accumulated a devoted and skilled following. Through online forums and
				Minesweeper.online, players have built a community around the game, encouraging and challenging 
				each others’ skills. This game builds players’ <span class="em">pattern recognition, problem solving,</span> 
				and <span class="em">logical skills</span>, all skills especially important to Computer Science. </p>
				<div id="hoz">
					<figure>
						<img src={old_sweep} classname="h-full w-full pt-8 ps-10"/>
						<figcaption>Ancient version.</figcaption>
					</figure>
					<figure>
						<img src={new_sweep} classname="h-full w-full pt-8 ps-10"/>
						<figcaption>Minesweeper Online's version.</figcaption>
					</figure>
				</div>
				<p className ="font-mono leading-relaxed"> 
					We mainly drew inspiration for this project from one of our group members' 
					obsession with minesweeper, but came to the realization that the game seemed too 
					ancient to be of interest for many people. Being that there was this desire to 
					teach people how to play and show how rewarding and fun it can be, the project was thus born... 
				</p>
				<p className ="font-mono leading-relaxed"> 
				ScholasticSweeper is an educational minesweeper bot which provides step-by-step
				tutorials to solving minesweeper grids for the purpose of learning. Players new
				to the game can step through solutions and view the logic behind each move, 
				helping to build their logical solving abilities.
				</p>
			</main>

		</div>
	);
}
