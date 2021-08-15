import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/reset.css";
import "./assets/css/global.css";
import App from "./app";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();
