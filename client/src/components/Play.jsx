import React from "react";
import Header from "./Header";
import Cell from "./Cell";
import MineGrid from "./MineGrid";

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

export default function Play() {

	useEffect(() => {
		async function fetchTutorial(){
		  const tutorial = await axios.get("http://localhost:3000/play")
		  console.log(tutorial.data.grid)
		//   localStorage.setItem("tutorial", JSON.stringify(tutorial.data))
		}
		fetchTutorial()
	  }, [])
	
	//   const [tutorialState, setTutorialState] = useState({
	// 	tutorial:  JSON.parse(localStorage.getItem("tutorial")).steps ?? [],
	// 	currStep: 0,
	// 	answer: JSON.parse(localStorage.getItem("tutorial")).answer ?? [],
	//   }
	//   )


	return (
	<div className="h-screen w-full text-base flex justify-around items-center gap-4">
     				<div className="flex flex-col gap-4">

				<MineGrid grid={testGrid} tutorialCell={[0,0]}/>
					</div>
				</div>
	);
}
