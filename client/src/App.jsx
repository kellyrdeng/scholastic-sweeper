import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MineGrid from "./components/MineGrid";
import Header from "./components/Header";

export default function App() {
	return (
		<div className="h-screen w-full text-base">
			<Header/>
      <BrowserRouter>
				<Routes>
					<Route path="/grid" element={<MineGrid />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}