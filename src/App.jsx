import { useState } from "react";
import { ClassState } from "./ClassState";
import { FuncState } from "./FuncState";
import "./App.css";

function App() {
	return (
		<div className='App'>
			<FuncState />
			<ClassState />
		</div>
	);
}

export default App;
