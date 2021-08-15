import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import { Home } from "../pages/home";
import { Inicio } from "../pages/inicio";
import { Antes } from "../pages/antes";
import { Amadurecimento } from "../pages/amadurecimento";
import { Contemporaneo } from "../pages/contemporaneo";
import { CardInfo } from "../components/card-info";
import { routes } from "./routes";

function App() {
	return (
		<Router>
			<Switch>
				{routes.map((route, index) => (
					<Route key={index} path={route.path}>
						<CardInfo {...route} />
					</Route>
				))}
				<Route path="/antes-do-design">
					<Antes />
				</Route>
				<Route path="/inicio-do-design">
					<Inicio />
				</Route>
				<Route path="/amadurecimento-do-design">
					<Amadurecimento />
				</Route>
				<Route path="/design-contemporaneo">
					<Contemporaneo />
				</Route>

				<Route path="/">
					<Home />
				</Route>
				<Redirect path="*" to="/" />
			</Switch>
		</Router>
	);
}

export default App;
