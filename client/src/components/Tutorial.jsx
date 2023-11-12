import React from "react";
import MineGrid from "./MineGrid";

export default function Tutorial({tutorialState, setTutorialState}) {
  const tutorial = tutorialState.tutorial
  let currStep = tutorialState.currStep
  let currTutorial = tutorial[currStep]
  
  const handleBackClick = (event) => {
    if(currStep === 0) return
    setTutorialState({...tutorialState, currStep: currStep - 1})
  }

  const handleForwardClick = (event) => {
    if(currStep >= tutorial.length - 1) return
    setTutorialState({...tutorialState, currStep: currStep + 1})
  }

	return (
		<div className="h-screen w-full text-base flex justify-around items-center gap-4">
     <div className="flex flex-col gap-4">
      <MineGrid grid={currTutorial?.gameState} tutorialCell={currTutorial?.coords}/>
      <div className="controls text-black flex justify-around">
        <button className="bg-white" onClick={handleBackClick}>&larr;</button>
        <button className="bg-transparent text-white font-bold text-xl">{`${currStep + 1}/ ${tutorial.length}`}</button>
        <button className="bg-white" onClick={handleForwardClick}>&rarr;</button>
      </div>
     </div>
      <div className=" w-5/12 bg-zinc-700 min-h-[8rem] flex flex-col justify-center items-center p-6 rounded-xl max-h-screen overflow-x-scroll gap-4">
        <p className="font-bold text-2xl leading-8">{currTutorial?.description}</p>
        <ul className="list-disc w-11/12 gap-4 flex-col flex">
          {currTutorial?.bullets?.map(idea => <li className="text-base font-semibold leading-5">{idea}</li>)}
        </ul>
      </div>
		</div>
	);
}
