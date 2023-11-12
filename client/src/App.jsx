import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Header from "./components/Header";
import Tutorial from "./components/Tutorial";
import Home from "./Home";
import axios from "axios";

export default function App() {
  useEffect(() => {
    async function fetchTutorial(){
      const tutorial = await axios.get("http://localhost:3000/tutorial")
      localStorage.setItem("tutorial", JSON.stringify(tutorial.data))
    }
    fetchTutorial()
  }, [])
  const [tutorialState, setTutorialState] = useState({
    tutorial:  JSON.parse(localStorage.getItem("tutorial")).steps ?? [],
    currStep: 0,
    answer: JSON.parse(localStorage.getItem("tutorial")).answer ?? [],
  })

	return (
		<div className="h-screen w-screen relative text-base">
			<Header />
			<BrowserRouter>
				<Routes>
					<Route path="/about" element={<About />} />
					<Route path="/tutorial" element={<Tutorial />} />
					<Route path="/" element={<Home />} />
					<Route path="/tutorial" element={<Tutorial tutorialState={tutorialState} setTutorialState={setTutorialState}/>} />
					{/* <Route path="/play" element={<Play />} /> */}
				</Routes>
			</BrowserRouter>
		</div>
	);
}
