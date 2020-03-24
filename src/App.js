import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";

const CatPage = () => (
	<div>
		<h1>CATS</h1>
	</div>
);

function App() {
	return (
		<div>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/shop/cats' component={CatPage} />
			</Switch>
		</div>
	);
}

export default App;
