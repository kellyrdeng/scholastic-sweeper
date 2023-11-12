import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Grid from "./components/grid";

export default function App() {
	return (
		<div className="h-screen w-full text-base">
			<BrowserRouter>
				<Routes>
					<Route path="/grid" element={<Grid />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}
