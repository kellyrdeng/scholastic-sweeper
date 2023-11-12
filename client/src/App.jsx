import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Grid from "./components/Grid";
import MineGrid from "./components/MineGrid";
import Header from "./components/Header";

export default function App() {
	return (
		<div className="h-screen w-full text-base">
			<Header/>
      <BrowserRouter>
				<Routes>
					<Route path="/grid" element={<Grid />} />
                    <Route path="/About" element={<About />} />
					<Route path="/grid" element={<MineGrid />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}