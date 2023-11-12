import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import MineGrid from "./components/MineGrid";
import Header from "./components/Header";
import Tutorial from "./Tutorial";

export default function App() {
	return (
		<div className="h-screen w-full text-base">
			<Header/>
      <BrowserRouter>
				<Routes>
                    <Route path="/About" element={<About />} />
					<Route path="/Grid" element={<MineGrid />} />
					<Route path="/Tutorial" element={<Tutorial />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}