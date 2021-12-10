import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// sacamos strict mode

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
