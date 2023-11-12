import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Header from "./components/Header";
import Tutorial from "./components/Tutorial";
import Home from "./Home";

export default function App() {
	return (
		<div className="h-screen w-full text-base">
			<Header />
			<BrowserRouter>
				<Routes>
					<Route path="/about" element={<About />} />
					<Route path="/tutorial" element={<Tutorial />} />
					<Route path="/home" element={<Home />} />
					{/* <Route path="/play" element={<Play />} /> */}
				</Routes>
			</BrowserRouter>
		</div>
	);
}
