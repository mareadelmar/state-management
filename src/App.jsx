import { useState } from "react";
import { ClassState } from "./ClassState";
import { UseState } from "./UseState";
import "./App.css";

function App() {
	return (
		<div className='App'>
			<UseState />
			<ClassState />
		</div>
	);
}

export default App;
