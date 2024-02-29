import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AnimationContextWrapper } from "./context/animation";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AnimationContextWrapper>
		<Router>

			<App />

		</Router>

		</AnimationContextWrapper>
	</React.StrictMode>
);
