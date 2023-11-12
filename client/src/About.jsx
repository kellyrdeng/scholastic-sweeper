import React from "react";
import old_sweep from '../assets/imgs/oldminesweep.png';
import new_sweep from '../assets/imgs/newminesweeper.png';


export default function About() {
	return (
		<div>
			<main id="About_Main"className="m-auto m-0" >
				<h1 className="pt-8 content-center font-serif"><b>About ScholasticSweeper:</b></h1>
				<p className ="font-mono leading-relaxed">
				<span class="em">Why the interest in Minesweeper?</span> A game originally created by Microsoft in the 90s, 
				Minesweeper has accumulated a devoted and skilled following. Through online forums and
				Minesweeper.online, players have built a community around the game, encouraging and challenging 
				each others’ skills. This game builds players’ <span class="em">pattern recognition, problem solving,</span> 
				and <span class="em">logical skills</span>, all skills especially important to Computer Science. </p>
				<div id="about_img">
					<img src={old_sweep} classname="pt-8 ps-10"></img>
					<img src={new_sweep} classname="pt-8 ps-10"></img>
				</div>
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
